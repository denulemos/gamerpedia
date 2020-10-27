import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import {styles} from "./styles";
import Input from "../../components/TextInput/index";
import AwesomeAlert from "react-native-awesome-alerts";
import {firebase} from "../../services/firebaseConfig";


const Login = (props) =>  {
  const [usr, setUsr] = useState("");
  const [psw, setPsw] = useState("");
  const [isLoading , setLoading] = useState(true);
  const [botonHabilitado, setBoton] = useState(false);
  const [mensajePop, setMensajePop] = useState("");
  const [showAlertStat, setShowAlertStat] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
       props.navigation.navigate("GamesList")
      }
      else{
        setLoading(false)
      } 
    });
  });

  const login = () => {
    
    firebase.auth()
      .signInWithEmailAndPassword(usr, psw)
      .then((usr) => {
        setShowAlertStat(false);
        setMensajePop("Bienvenido " + user.email + "!");
        setShowAlertError(true);
        props.navigation.navigate("GamesList");
      })
      .catch((err) => {
        
        setMensajePop('Ocurrio un error: ' + err);
        setShowAlertError(true);
        setShowAlertStat(false);
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



  const hideAlertError = () => {
    setShowAlertError(false);
  };
  const habilitarBoton = () => {
    usr !== "" && psw !== "" && psw.length > 6
      ? setBoton(true)
      : setBoton(false);
  };

  if (!isLoading){
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
  else{
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
          
          <Image
            source={require("../../assets/img/mario.png")}
            style={styles.img}
          />
          <Text style={styles.titulo}>Gamerpedia</Text>

          <ActivityIndicator size="large" style={{marginTop: 10}} color="#00ff00" />
           
        
        </ImageBackground>
      </View>
    );
  }
   
  
}

export default Login;
