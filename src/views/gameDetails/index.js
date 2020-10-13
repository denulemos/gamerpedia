import React, {Component} from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";
import {styles} from "./styles";
import Loading from "../../components/Loading/index";
import {FlatGrid} from "react-native-super-grid";
import GameServices from "../../services/gameService";

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
      juego: this.props.route.params.juego, //Tomamos los parametros del otro activity
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
        console.log("Ocurrio un error!", err);
      });
  }

  render() {
    if (this.state.juego == null || this.state.fotos == null) {
      return <Loading />;
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{uri: this.state.juego.background_image}}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{this.state.juego.name}</Text>

            <Text style={styles.datos}>
              Fecha de Salida {this.state.juego.released}
            </Text>

            <Text style={styles.datos}>
              Rating General {this.state.juego.rating}
            </Text>

            <Text style={styles.puntuacion}>
              ({this.state.juego.ratings_count} puntuaciones)
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: " #2d3436",
                backgroundColor: "#fab1a0",
                padding: 15,
                fontFamily: "yoster",
                fontSize: 18
              }}
            >
              Fotos
            </Text>

            <FlatGrid
              itemDimension={130}
              data={this.state.fotos}
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
       
      
           
      </ScrollView>
    );
  }
}

export default DevDetails;
