import React, {Component} from "react";
import {View, ActivityIndicator, Text, Image, ScrollView} from "react-native";
import {styles} from "./styles";
import Loading from "../../components/Loading/index";
import GameServices from "../../services/gameService";
import {FlatGrid} from "react-native-super-grid";
import Error from "../../components/error/index";
class DevDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plat: null,
      objetoPlat: null
    
    };
  }


  getDescripciones = () => {
    GameServices.getPlatformDescription(this.props.route.params.plat.id)
    .then((results) => {
      if (results && results.data) {
        this.setState({
          objetoPlat: results.data
        });
      }
    })
    .catch((err) => {
      this.setState({
        objetoPlat: "none"
      });
    });
  };



  componentDidMount() {
    this.setState({
      plat: this.props.route.params.plat //Tomamos los parametros del otro activity
    });

    this.getDescripciones();
  }

  render() {
    const {plat, objetoPlat} = this.state;

    if (objetoPlat == null ) {
      return <Loading />;
    }
    if (objetoPlat != "none") {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.header}></View>
          <Image
            style={styles.avatar}
            source={{uri: plat.image_background}}
          />
         
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{plat.name}</Text>
              <Text
                style={{
                  color: "white",
                  fontFamily: "OpenSansRegular",
                  fontSize: 15
                }}
              >
                Cantidad de juegos {plat.games_count}
              </Text>
            </View>
            {objetoPlat.description != "" ||
            objetoPlat.description != null ? (
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: "black",
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
                  {objetoPlat.description == ""
                    ? "No hay descripcion disponible para esta plataforma por el momento :("
                    : objetoPlat.description.replace(/(<([^>]+)>)/ig, '')}
                </Text>
              </View>
            ) : null}
          
        </ScrollView>
      );
    } else {
      return <Error />;
    }
  }
}

export default DevDetails;
