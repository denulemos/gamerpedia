import React, {Component} from "react";
import {View, Image, TouchableOpacity} from "react-native";
import {Text} from "react-native-paper";
import styles from "./styles";
import {firebase} from "../services/firebaseConfig";
import AwesomeAlert from "react-native-awesome-alerts";
class CustomDraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      showAlert: false
    };
  }
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
    _this.showAlert();
    firebase
      .auth()
      .signOut()
      .then(function () {
      
       _this.props.navigation.navigate("Login");
       
      })
      .catch(function (error) {
        
      });
      _this.hideAlert();
  };

  render() {
    const {showAlert} = this.state;
    return (
      <View style={{backgroundColor: "black", flex: 1}}>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          message="Cerrando Sesion"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={false}
        />
        <View
          style={{
            backgroundColor: "#4b4b4b"
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
        <View
          style={{
            backgroundColor: "#4b4b4b",
            flexDirection: "row",
            paddingBottom: 50,
            paddingTop: 40
          }}
        >
          <Image
            style={styles.user}
            source={require("../assets/img/user.png")}
          />
          <Text
            style={{
              color: "white",
              alignSelf: "flex-end",
              padding: 5,
              fontSize: 12,
              paddingLeft: 10,
              paddingBottom: 13,
              fontFamily: "yoster"
            }}
          >
            {this.state.user}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.logout();
          }}
          style={{
            flexDirection: "row",
            padding: 15,
            position: "absolute",
            bottom: 0
          }}
        >
          <Image
            style={styles.logout}
            source={require("../assets/img/logout.png")}
          />
          <Text
            style={{
              paddingLeft: 15,
              paddingTop: 5,
              fontFamily: "OpenSansRegular",
              color: "#7d5fff"
            }}
          >
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CustomDraw;
