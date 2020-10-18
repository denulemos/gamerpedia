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
      isLoading: true,
      page : 1
    };
  }
  renderFooter = () => {
    return(
      <View style={{marginTop: 10, alignItems: 'center', marginBottom: 10}}>
       <Loading/>
      </View>
    )
  }
  traerMasDevelopers = () =>{
   
  this.setState({page : this.state.page + 1})

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
  }
  componentDidMount() {
    GameServices.getDev(this.state.page)
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
      this.setState({page: 2});
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
        ListFooterComponent={this.renderFooter}
        onEndReachedThreshold={0.5}
          onEndReached={this.traerMasDevelopers}
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
