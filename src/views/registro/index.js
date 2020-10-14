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
import AwesomeAlert from 'react-native-awesome-alerts';

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      psw: "",
      botonHabilitado: false,
      showAlert: false,
      mensajePopUp: ''
    };
  }

  registro = () => {
    console.log(this.state.email)
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.psw)
      .then(() => {
        this.setState({mensajePopUp: 'Usuario creado correctamente, ya podés logearte'})
        this.showAlert();
        this.props.navigation.navigate('Login');
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          this.setState({mensajePopUp: 'Email ya registrado'})
          this.showAlert();
        }

        if (error.code === "auth/invalid-email") {
          this.setState({mensajePopUp: 'Email invalido'})
          this.showAlert();
        }


        this.setState({mensajePopUp: 'Ocurrió un error'})
        this.showAlert();
      });
  };
  handleUser = (value) => {
    this.setState({email: value});
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
  handlePass = (value) => {
    this.setState({psw: value});
    this.habilitarBoton();
  };
  habilitarBoton = () => {
    this.state.usr !== "" && this.state.psw !== ""
      ? this.setState({botonHabilitado: true})
      : this.setState({botonHabilitado: false});
  };
  render() {
    const {showAlert} = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/img/registro.png")}
          style={styles.image}
        >
          <Image
            source={require("../../assets/img/Sonic.png")}
            style={styles.img}
          />
          <Text style={styles.titulo}>Registro</Text>

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
           <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Aviso"
          message={this.state.mensajePopUp}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
          <TouchableOpacity
            onPress={() => {this.registro();}}
            style={
              this.state.botonHabilitado
                ? styles.botonLogin
                : styles.botonLoginInh
            }
            disabled={!this.state.botonHabilitado}
          >
            <Text style={styles.textoBotonLogin}>Registrarme!</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

export default Registro;
