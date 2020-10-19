import React, {Component} from "react";
import {View, Image, TouchableOpacity} from "react-native";
import {Text} from "react-native-paper";
import styles from "./styles";
import {firebase} from "../services/firebaseConfig";

class CustomDraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
 

  componentDidMount() {
    let _this = this;

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        _this.setState({user: user.email});
      } else {
        _this.setState({user: "Gamerpedia"});
      }
    });
  }

  logout = () => {
    let _this = this;

    firebase
      .auth()
      .signOut()
      .then(function () {
       
        _this.props.navigation.navigate("Login");
      })
      .catch(function (error) {
        _this.props.navigation.navigate("Login");
        console.log(error)
      });
    
  };

  render() {
  
    return (
      <View style={styles.containerDrawer}>
      
        <View
          style={{
            backgroundColor: "#7d5fff"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.closeDrawer();
            }}
          >
            <Image
              style={styles.logoclose}
              source={require("../assets/img/more.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cerrarDrawer}>
          <Image
            style={styles.user}
            source={require("../assets/img/user.png")}
          />
          <Text style={styles.usuario}>{this.state.user}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.logout();
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
  }
}

export default CustomDraw;
