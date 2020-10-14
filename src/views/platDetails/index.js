import React, {Component} from "react";
import {View, ActivityIndicator, Text, Image, ScrollView} from "react-native";
import {styles} from "./styles";
import Loading from "../../components/Loading/index";
import GameServices from "../../services/gameService";
import {FlatGrid} from "react-native-super-grid";

class DevDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plat: null,
      objetoPlat: null,
      juegos: null
    };
  }

  componentDidMount() {
    GameServices.getGamesForPlatform(this.props.route.params.plat.id)
      .then((results_) => {
        console.log(results_.data);
        if (results_.data) {
          this.setState({
            juegos: results_.data
          });
         
        }
      })
      .catch((err) => {
        console.log("Ocurrio un error! getGamesForPlatform", err);
      });

    this.setState({
      plat: this.props.route.params.plat //Tomamos los parametros del otro activity
    });

    GameServices.getPlatformDescription(this.props.route.params.plat.id)
      .then((results) => {
        if (results && results.data) {
          this.setState({
            objetoPlat: results.data
          });
        }
      })
      .catch((err) => {
        console.log("Ocurrio un error!", err);
      });
  }

  render() {
    if (this.state.objetoPlat == null && this.state.juegos == null) {
      return <Loading />;
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{uri: this.state.plat.image_background}}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{this.state.plat.name}</Text>
            <Text
              style={{
                color: "white",
                fontFamily: "OpenSansRegular",
                fontSize: 15
              }}
            >
              Cantidad de juegos {this.state.plat.games_count}
            </Text>
          </View>
         {(this.state.objetoPlat.description != "" || this.state.objetoPlat.description != null) ? (
            <View style={{flex: 1}}>
              <Text
                style={{
                  color: " #2d3436",
                  backgroundColor: "#fd79a8",
                  padding: 15,
                  fontFamily: "yoster",
                  fontSize: 18
                }}
              >
                Descripcion (English)
              </Text>
              <Text
                style={{
                  color: "white",
                  padding: 20,
                  fontFamily: "OpenSansRegular"
                }}
              >
                {this.state.objetoPlat.description}
              </Text>
            </View>
          ) : null} 

          <View style={{flex: 1}}>
            <Text
              style={{
                color: " #2d3436",
                backgroundColor: "#fd79a8",
                padding: 15,
                fontFamily: "yoster",
                fontSize: 18
              }}
            >
              Juegos
            </Text>

            
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default DevDetails;
