import React, {Component} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Loading from "../../components/Loading/index";
import {styles} from "./styles";
import GameServices from "../../services/gameService";
import {FlatGrid} from "react-native-super-grid";
import Error from '../../components/error/index';
import FooterLoading from '../../components/footerLoading/index';
class DevList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devs: [],
      isLoading: true,
      page : 1
    };
  }

  traerDevelopers = () =>{
   
  GameServices.getDev(this.state.page)
  .then((results) => {
    if (results && results.data && results.data.results) {
      this.setState({
        devs: this.state.devs.concat(results.data.results),
        
      });
    }
  })
  .catch((err) => {
    this.setState({
      juegos: 'none',
     
    });
  });
  this.setState({page : this.state.page + 1})

  }

  componentDidMount() {
    this.traerDevelopers();
    this.setState({isLoading: false});
  }

  render() {
    const {isLoading, devs} = this.state;
    
    if (isLoading) {
      return <Loading />;
    }
    if (devs != 'none' ){
       return (
      <FlatGrid
        itemDimension={130}
        data={devs}
        style={styles.gridView}
        ListFooterComponent={FooterLoading}
        onEndReachedThreshold={0.5}
          onEndReached={this.traerDevelopers}
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
