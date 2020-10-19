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
import Error from '../../components/error/index';
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
        this.setState({
          platforms: 'none',
          isLoading: false
        });
       
      });
  }

  render() {
    const {isLoading, platforms} = this.state;
    //PANTALLA LOADING
    if (isLoading) {
      return <Loading />;
    } 
    if (platforms != 'none'){
      return (
        <FlatGrid
          itemDimension={200}
          data={platforms}
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
              
               <Text style={styles.itemName}>{item.name}</Text>
               
              
              </ImageBackground>
            
  
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

export default PlatList;
