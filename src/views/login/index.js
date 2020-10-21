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

const Login = (props) =>  {
  const [usr, setUsr] = useState("");
  const [psw, setPsw] = useState("");
  const [botonHabilitado, setBoton] = useState(false);
  const [mensajePop, setMensajePop] = useState("");
  const [showAlertStat, setShowAlertStat] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
       setMensajePop("Bienvenido " + user.email + "!");
       showAlertEr();
       props.navigation.navigate("GamesList")
      } 
    });
  });

  const login = () => {
    showAlert();
    firebase.auth()
      .signInWithEmailAndPassword(usr, psw)
      .then((usr) => {
        hideAlert();
        props.navigation.navigate("GamesList");
      })
      .catch((err) => {
        
        setMensajePop('Ocurrio un error: ' + err);
        showAlertEr();
        hideAlert();
      });
  };

  const handleUser = (value) => {
    setUsr(value);
    habilitarBoton();
  };
  const handlePass = (value) => {
    setPsw(value);
    habilitarBoton();
  };

  const showAlert = () => {
    setShowAlertStat(true);
  };
  const hideAlert = () => {
    setShowAlertStat(false);
  };

  const showAlertEr = () => {
    setShowAlertError(true);
  };
  const hideAlertError = () => {
    setShowAlertError(false);
  };
  const habilitarBoton = () => {
    usr !== "" && psw !== "" && psw.length > 6
      ? setBoton(true)
      : setBoton(false);
  };

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/img/wallpaper.jpg")}
          style={styles.image}
        >
          <AwesomeAlert
            show={showAlertError}
            showProgress={false}
            message={mensajePop}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="Entendido"
            confirmButtonColor="#DD6B55"
            onConfirmPressed={() => {
              hideAlertError();
              
            }}
          />
           <AwesomeAlert
            show={showAlertStat}
            showProgress={false}
            message={"Ingresando"}
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
          <TouchableOpacity
            onPress={() => {
              login();
            }}
            style={
              botonHabilitado
                ? styles.botonLogin
                : styles.botonLoginInh
            }
            disabled={!botonHabilitado}
          >
            <Text style={styles.textoBotonLogin}>Ingresar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Registro");
            }}
            style={styles.botonRegistro}
          >
            <Text style={styles.textoBotonRegistro}>Registrarme</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  
}

export default Login;
