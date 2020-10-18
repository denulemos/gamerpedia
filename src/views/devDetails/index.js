import React, {Component} from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SectionList,
  SafeAreaView,
  ScrollView
} from "react-native";
import {styles} from "./styles";
import Loading from "../../components/Loading/index";
import {FlatGrid} from "react-native-super-grid";
import GameServices from "../../services/gameService";
import Error from "../../components/error/index";
class DevDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dev: null,
      juegos: null
    };
  }

  componentDidMount() {
    this.setState({
      dev: this.props.route.params.dev
    });
    GameServices.getGamesForDev(this.props.route.params.dev.id)
      .then((results) => {
        if (results && results.data && results.data.results) {
          this.setState({
            juegos: results.data.results
          });
        }
      })
      .catch((err) => {
        this.setState({juegos: "none"});
      });
  }

  render() {
    const {juegos, dev} = this.state;
    if (juegos == null) {
      return <Loading />;
    }

    if (juegos != "none") {
      return (
        <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: dev.image_background}} />
          
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{dev.name}</Text>
              <Text style={styles.datos}>
                Cantidad de juegos {dev.games_count}
              </Text>
            </View>

           
              <Text style={styles.juegosTitle}>Juegos realizados</Text>
              <FlatGrid
                removeClippedSubviews={true}
                itemDimension={130}
                data={this.state.juegos}
                style={styles.gridView}
                spacing={10}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={[styles.itemContainer, {backgroundColor: "black"}]}
                    onPress={() => {
                      this.props.navigation.navigate("GameDetails", {
                        juego: item
                      });
                    }}
                  >
                    <ImageBackground
                      source={{uri: item.background_image}}
                      style={{flex: 1}}
                    ></ImageBackground>

                    <Text style={styles.itemTitle}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
           
          
        </View>
      );
    } else {
      return <Error />;
    }
  }
}

export default DevDetails;
