import React, {Component} from "react";
import {View, ImageBackground, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import GameServices from "../../services/gameService";
import {FlatGrid} from "react-native-super-grid";
import Loading from "../../components/Loading/index";
import Error from "../../components/error/index";
import FooterLoading from "../../components/footerLoading/index";
class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      juegos: [],
      isLoading: true,
      page: 1
    };
  }

  traerJuegos = () => {
    GameServices.getGames(this.state.page)
      .then((results) => {
        if (results && results.data && results.data.results) {
          this.setState({
            juegos: this.state.juegos.concat(results.data.results)
          });
        }
      })
      .catch((err) => {
        this.setState({
          juegos: "none"
        });
      });
    this.setState({page: this.state.page + 1});
  };

  componentDidMount() {
    this.traerJuegos();
    this.setState({
      isLoading: false
    });
  }

  render() {
    const {juegos, isLoading} = this.state;
    if (isLoading) {
      return <Loading />;
    }
    if (juegos != "none") {
      return (
        <FlatGrid
          itemDimension={130}
          data={juegos}
          ListFooterComponent={FooterLoading}
          style={styles.gridView}
          keyExtractor={(item) => item.id.toString()}
          spacing={10}
          onEndReachedThreshold={0.5}
          onEndReached={this.traerJuegos}
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
    } else {
      return <Error />;
    }
  }
}

export default GamesList;
