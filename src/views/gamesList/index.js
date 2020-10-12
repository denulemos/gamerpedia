import React, {Component} from "react";
import {
  View,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import {styles} from "./styles";
import GameServices from "../../services/gameService";
import {FlatGrid} from "react-native-super-grid";
import Loading from "../../components/Loading/index";

class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      juegos: null,
      isLoading: true
    };
  }

  componentDidMount() {
    GameServices.getGames()
      .then((results) => {
        if (results && results.data && results.data.results) {
          this.setState({
            juegos: results.data.results,
            isLoading: false
          });
        }
      })
      .catch((err) => {
        console.log("Ocurrio un error!  ", err);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <FlatGrid
        itemDimension={130}
        data={this.state.juegos}
        style={styles.gridView}
        spacing={10}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate(
                "GameDetails",
                {juego: item},
                TouchableOpacity
              );
            }}
            style={[styles.itemContainer, {backgroundColor: "black"}]}
          >
            <ImageBackground
              source={{uri: item.background_image}}
              style={{flex: 1}}
            ></ImageBackground>

            <View>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

export default GamesList;
