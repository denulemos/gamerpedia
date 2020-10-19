import React, {useState, useEffect} from "react";
import {View, Image, TouchableOpacity} from "react-native";
import {Text} from "react-native-paper";
import styles from "./styles";
import {firebase} from "../services/firebaseConfig";

const CustomDraw = (props) => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user.email);
      } else {
        setUser("Gamerpedia");
      }
    });
  }, []);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        props.navigation.navigate("Login");
      })
      .catch(function (error) {
        props.navigation.navigate("Login");
        console.log(error);
      });
  };

  return (
    <View style={styles.containerDrawer}>
      <View
        style={{
          backgroundColor: "#7d5fff"
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
          }}
        >
          <Image
            style={styles.logoclose}
            source={require("../assets/img/more.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cerrarDrawer}>
        <Image style={styles.user} source={require("../assets/img/user.png")} />
        <Text style={styles.usuario}>{user}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          logout();
        }}
        style={styles.logoutButton}
      >
        <Image
          style={styles.logout}
          source={require("../assets/img/logout.png")}
        />

        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDraw;
