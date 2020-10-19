import React, {Component} from "react";
import {
  View,
  Text,
  Image,
  ScrollView
} from "react-native";
import {styles} from "./styles";
import Loading from "../../components/Loading/index";
import GameServices from "../../services/gameService";
import Error from "../../components/error/index";

class DevDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plat: null,
      objetoPlat: null,
      arrJuegos: []
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

  juegosPlataforma = () => {
    return this.state.arrJuegos.map((item) => {
      return (
        <View key={item.id} style={{height: 20, marginLeft: 10, backgroundColor: '#fd79a8', margin: 10, padding: 5}}>
          <Text style={{color: "black", fontFamily: 'yoster'}}>{item.name}</Text>
        </View>
      );
    });
  };

  componentDidMount() {
    this.setState({
      plat: this.props.route.params.plat, //Tomamos los parametros del otro activity
      arrJuegos: this.props.route.params.plat.games
    });

    this.getDescripciones();
  }


  render() {
    const {plat, objetoPlat} = this.state;

    if (objetoPlat == null) {
      return <Loading />;
    }
    if (objetoPlat != "none") {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: plat.image_background}} />

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

          <View style={{flex: 1}}>
            <Text style={styles.titulo}>Descripcion (English)</Text>
            <Text style={styles.descripcion}>
              {objetoPlat.description == ""
                ? "No hay descripcion disponible para esta plataforma por el momento :("
                : objetoPlat.description.replace(/(<([^>]+)>)/gi, "")}
            </Text>
          </View>

          <Text style={styles.titulo}>Algunos juegos de esta plataforma</Text>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', padding: 10}}>
          {this.juegosPlataforma()}
          </View>
        
        </ScrollView>
      );
    } else {
      return <Error />;
    }
  }
}

export default DevDetails;
