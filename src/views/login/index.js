/* eslint-disable prettier/prettier */
// Dependencies
import React, {Component} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import {styles} from "./styles";
import auth from "@react-native-firebase/auth";
import Input from "../../components/TextInput/index";
import AwesomeAlert from "react-native-awesome-alerts";
import { firebase } from '../../services/firebaseConfig';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usr: "",
      psw: "",
      botonHabilitado: false,
      mensajePopUp: "",
      showAlert: false
    };
  }

 

  login = () => {
  
    console.log('llegue');
    this.setState({mensajePopUp:'Ingresando'});
    this.showAlert();
    firebase.auth()
      .signInWithEmailAndPassword(this.state.usr, this.state.psw)
      .then((usr) => {
        // this.props.navigation.navigate("GamesList", {ID: 1});
        this.hideAlert();
      console.log(usr);
      this.props.navigation.navigate("GamesList");
    })
      .catch((err) =>{
        this.setState({mensajePopUp: err});
        this.showAlert();
      });
  };
  
  handleUser = (value) => {
    this.setState({usr: value});
    this.habilitarBoton();
  };
  handlePass = (value) => {
    this.setState({psw: value});
    this.habilitarBoton();
  };
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
  habilitarBoton = () => {
    this.state.usr !== "" && this.state.psw !== "" && this.state.psw.length > 6
      ? this.setState({botonHabilitado: true})
      : this.setState({botonHabilitado: false});
  };
  render() {
    const {showAlert} = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/img/wallpaper.jpg")}
          style={styles.image}
        >
        <AwesomeAlert
            show={showAlert}
            showProgress={false}
          
            message={this.state.mensajePopUp}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={false}
            
           
           
          />
          <Image
            source={require("../../assets/img/mario.png")}
            style={styles.img}
          />
          <Text style={styles.titulo}>Gamerpedia</Text>

          <Input
            label={"Email"}
            secure={false}
            style={styles.input}
            handle={this.handleUser}
          />
          <Input
            label={"Contraseña"}
            secure={true}
            style={styles.input}
            handle={this.handlePass}
          />
          <TouchableOpacity
            onPress={() => {
              this.login();
            }}
            style={
              this.state.botonHabilitado
                ? styles.botonLogin
                : styles.botonLoginInh
            }
            disabled={!this.state.botonHabilitado}
          >
            <Text style={styles.textoBotonLogin}>Ingresar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Registro");
            }}
            style={styles.botonRegistro}
          >
            <Text style={styles.textoBotonRegistro}>Registrarme</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

export default Login;
