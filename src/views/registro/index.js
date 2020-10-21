import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import {styles} from "./styles";
import Input from "../../components/TextInput/index";
import AwesomeAlert from "react-native-awesome-alerts";
import {firebase} from "../../services/firebaseConfig";

const Registro = (props) => {
  const [email, setEmail] = useState("");
  const [pswConf, setPswConf] = useState("");
  const [psw, setPsw] = useState("");
  const [botonHabilitado, setBotonHabilitado] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [mensajePopUp, setMensajePopUp] = useState("");
  const [showAlertEspera, setShowAlertEspera] = useState(false);
  const [hideAlertOk, setHideAlertOk] = useState(false);

  const validar = () => {
    setShowAlertEspera(true);
    if (psw != pswConf) {
      setMensajePopUp("Las contraseñas no son iguales!");
      setShowAlertEspera(false);
      setShowAlert(true);
    } else {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      ) {
        registro();
      } else if (/^$|\s+/.test(psw)) {
        //Espacios blancos
        setMensajePopUp("Ingrese una contraseña valida");
        setShowAlertEspera(false);
        setShowAlert(true);
      } else {
        setMensajePopUp("Ingrese un email valido");
        hideAlertEspera();
        setShowAlert(true);
      }
    }
  };

  const registro = () => {
    setShowAlertEspera(false);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, psw)
      .then(() => {
        
      })
      .catch((error) => {
        if (error.Error === "auth/email-already-in-use") {
          setMensajePopUp("Email ya registrado");
          setShowAlertEspera(false);
          setShowAlert(true);
        }

        if (error.Error === "auth/invalid-email") {
          setMensajePopUp("Email invalido");
          setShowAlertEspera(false);
          setShowAlert(true);
        }

        setMensajePopUp("Ocurrió un error en el registro" + error);
        setShowAlertEspera(false);
        setShowAlert(true);
      });
  };

  const handleUser = (value) => {
    setEmail(value);
    habilitarBoton();
  };

  const hideAlertEspera = () => {
    setShowAlertEspera(false);
  };
  const handlePass = (value) => {
    setPsw(value);
    habilitarBoton();
  };
  const handlePassConf = (value) => {
    setPswConf(value);
    habilitarBoton();
  };
  const habilitarBoton = () => {
    email !== "" && psw !== "" && pswConf !== "" && psw.length > 6
      ? setBotonHabilitado(true)
      : setBotonHabilitado(false);
  };

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
          autoCorrect={false}
          type={"email-address"}
          handle={handleUser}
        />
        <Input
          label={"Contraseña"}
          secure={true}
          style={styles.input}
          handle={handlePass}
        />
        <Input
          label={"Confirmar Contraseña"}
          secure={true}
          style={styles.input}
          handle={handlePassConf}
        />
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Aviso"
          message={mensajePopUp}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Entendido"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
            setShowAlert(false);
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
            validar();
          }}
          style={botonHabilitado ? styles.botonLogin : styles.botonLoginInh}
          disabled={!botonHabilitado}
        >
          <Text style={styles.textoBotonLogin}>Registrarme</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Login");
          }}
          style={styles.botonLogin}
        >
          <Text style={styles.textoBotonLogin}>Volver</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Registro;
