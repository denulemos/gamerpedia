import React, {Component} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import Loading from "../../components/Loading/index";
import {styles} from "./styles";
import GameServices from "../../services/gameService";
import {FlatGrid} from "react-native-super-grid";
import Error from '../../components/error/index';
class DevList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devs: null,
      isLoading: true
    };
  }

  componentDidMount() {
    GameServices.getDev()
      .then((results) => {
        if (results && results.data && results.data.results) {
          this.setState({
            devs: results.data.results,
            isLoading: false
          });
        }
      })
      .catch((err) => {
        this.setState({
          devs: 'none',
          isLoading: false
        });
       
      });
  }

  render() {
    //PANTALLA LOADING
    if (this.state.isLoading) {
      return <Loading />;
    }
    if (this.state.devs != 'none' ){
       return (
      <FlatGrid
        itemDimension={130}
        data={this.state.devs}
        style={styles.gridView}
        spacing={10}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("DevDetails", {dev: item});
            }}
            style={[styles.itemContainer, {backgroundColor: "black"}]}
          >
            <ImageBackground
              source={{uri: item.image_background}}
              style={{flex: 1}}
            ></ImageBackground>
            <View style={{backgroundColor: "black"}}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
    }
    else{
      
    return <Error/>
     
    }
   
  }
}

export default DevList;
