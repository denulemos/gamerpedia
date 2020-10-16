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

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pswConf: "",
      psw: "",
      botonHabilitado: false,
      showAlert: false,
      mensajePopUp: "",
      shorAlertEspera: false,
      showAlertOk : false,
      hideAlertOk: false
    };
  }

  validar = () => {
    this.showAlertEspera();
    if (this.state.psw != this.state.pswConf) {
      this.setState({mensajePopUp: "Las contraseñas no son iguales!"});
      this.hideAlertEspera();
      this.showAlert();
    } else {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          this.state.email
        )
      ) {
        this.registro();
      } else {
        this.setState({mensajePopUp: "Ingrese un email valido"});
        this.hideAlertEspera();
        this.showAlert();
      }
    }
  };

  registro = () => {
   
   firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.psw)
      .then(() => {
       
        this.hideAlertEspera();
        this.showAlertOk();
        
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          this.setState({mensajePopUp: "Email ya registrado"});
          this.hideAlertEspera();
          this.showAlert();
        }

        if (error.code === "auth/invalid-email") {
          this.setState({mensajePopUp: "Email invalido"});
          this.hideAlertEspera();
          this.showAlert();
        }

        this.setState({mensajePopUp: "Ocurrió un error : " + error});
        this.hideAlertEspera();
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
  showAlertOk = () => {
    this.setState({
      showAlertOk: true
    });
  };
  showAlertEspera = () => {
    this.setState({
      showAlertEspera: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
  hideAlertOk = () => {
    this.setState({
      showAlertOk: false
    });
  };
  hideAlertEspera = () => {
    this.setState({
      showAlertEspera: false
    });
  };
  handlePass = (value) => {
    this.setState({psw: value});
    this.habilitarBoton();
  };
  handlePassConf = (value) => {
    this.setState({pswConf: value});
    this.habilitarBoton();
  };
  habilitarBoton = () => {
    this.state.usr !== "" &&
    this.state.psw !== "" &&
    this.state.pswConf !== "" &&
    this.state.psw.length > 6
      ? this.setState({botonHabilitado: true})
      : this.setState({botonHabilitado: false});
  };
  render() {
    const {showAlert, showAlertEspera, showAlertOk} = this.state;
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
          <Input
            label={"Confirmar Contraseña"}
            secure={true}
            style={styles.input}
            handle={this.handlePassConf}
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
            confirmText="Entendido"
            confirmButtonColor="#DD6B55"
            onConfirmPressed={() => {
              this.hideAlert();
            }}
          />
           <AwesomeAlert
            show={showAlertOk}
            showProgress={false}
            title="¡Hola!"
            message="Registro correcto! Ya podes logearte :)"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="Entendido"
            confirmButtonColor="#DD6B55"
            onConfirmPressed={() => {
              this.hideAlertOk();
              this.props.navigation.navigate('Login');
            }}
          />
           <AwesomeAlert
            show={showAlertEspera}
            showProgress={false}
            message="Registrando..."
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={false}
          />
          <TouchableOpacity
            onPress={() => {
              this.validar();
            }}
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
