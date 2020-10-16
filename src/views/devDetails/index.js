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
import Error from '../../components/error/index';
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
      this.setState({juegos: 'none'})
     
     
    });
  }

  render() {
    if (this.state.juegos == null) {
      return <Loading />;
    }
    
    if(this.state.juegos != 'none'){
      return (
        <ScrollView style={styles.container}>
          <View style={styles.header}></View>
          <Image
            style={styles.avatar}
            source={{uri: this.state.dev.image_background}}
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.dev.name}</Text>
              <Text style={styles.datos}>
                Cantidad de juegos {this.state.dev.games_count}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  color: " #2d3436",
                  backgroundColor: "#74b9ff",
                  padding: 15,
                  fontFamily: "yoster",
                  fontSize: 18
                }}
              >
                Juegos realizados
              </Text>
              <FlatGrid
                itemDimension={130}
                data={this.state.juegos}
                style={styles.gridView}
                spacing={10}
                renderItem={({item}) => (
                  <View
                    style={[styles.itemContainer, {backgroundColor: "black"}]}
                  >
                    <ImageBackground
                      source={{uri: item.background_image}}
                      style={{flex: 1}}
                    ></ImageBackground>
                   
                   <Text style={{color:'white', textAlign: 'center', fontFamily: 'OpenSansRegular'}}>{item.name}</Text>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      );
    }
    else{
      return <Error/>
    }
    
  }
}

export default DevDetails;
