import React, {Component} from "react";
import {View, Text, Image, ImageBackground, ScrollView } from "react-native";
import {styles} from "./styles";
import Loading from "../../components/Loading/index";
import {FlatGrid} from "react-native-super-grid";
import GameServices from "../../services/gameService";
import Error from "../../components/error/index";


class DevDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      juego: null,
      fotos: null
    };
  }
 
  componentDidMount() {
    this.setState({
      juego: this.props.route.params.juego //Tomamos los parametros del otro activity
    });
    GameServices.getScreenshotGames(this.props.route.params.juego.id)
      .then((results) => {
        if (results && results.data && results.data.results) {
          this.setState({
            fotos: results.data.results
          });
        }
      })
      .catch((err) => {
        this.setState({
          fotos: "none"
        });
      });
  }

  render() {
    const {juego, fotos} = this.state;
    if (juego == null || fotos == null) {
      return <Loading />;
    }
    if (fotos != "none") {
      return (
        <View  style={styles.container}>
          <View style={styles.header}></View>
          <Image
            style={styles.avatar}
            source={{uri: juego.background_image}}
          />
         
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.juego.name}</Text>

              <Text style={styles.datos}>
                Fecha de Salida {juego.released}
              </Text>

              <Text style={styles.datos}>
                Rating General {juego.rating}
              </Text>

              <Text style={styles.puntuacion}>
                ({juego.ratings_count} puntuaciones)
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text
                style={styles.fotosContainer}
              >
                Fotos
              </Text>

              <FlatGrid
                itemDimension={130}
                data={fotos}
                style={styles.gridView}
                spacing={10}
                renderItem={({item}) => (
                  <View
                    style={[styles.itemContainer, {backgroundColor: "black"}]}
                  >
                    <ImageBackground
                      source={{uri: item.image}}
                      style={{flex: 1}}
                    ></ImageBackground>
                  </View>
                )}
              />
            </View>
         
        </View>
      );
    } else {
      return <Error />;
    }
  }
}

export default DevDetails;
