import React, {Component} from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";
import {styles} from "./styles";
import GameServices from "../../services/gameService";
import Loading from "../../components/Loading/index";
import {FlatGrid} from "react-native-super-grid";
class PlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platforms: null,
      isLoading: true
    };
  }

  componentDidMount() {
    GameServices.getPlataformas()
      .then((results) => {
        if (results && results.data && results.data.results) {
          this.setState({
            platforms: results.data.results,
            isLoading: false
          });
        }
      })
      .catch((err) => {
        console.log("Ocurrio un error!  ", err);
      });
  }

  render() {
    //PANTALLA LOADING
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <FlatGrid
        itemDimension={130}
        data={this.state.platforms}
        style={styles.gridView}
        spacing={10}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("PlatDetails", {plat: item});
            }}
            style={[styles.itemContainer, {backgroundColor: "black"}]}
          >
            <ImageBackground
              source={{uri: item.image_background}}
              style={{flex: 1}}
            >
              
            </ImageBackground>
            <View ><Text style={styles.itemName}>{item.name}</Text></View>

          </TouchableOpacity>
        )}
      />
    );
  }
}

export default PlatList;
