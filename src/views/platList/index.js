import React, {Component} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './styles';
import GameServices from '../../services/gameService';

class PlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platforms: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    GameServices.getPlataformas()
      .then((results) => {
        if (results && results.data && results.data.results) {
          this.setState({
            platforms: results.data.results,
            isLoading: false,
          });
        }
      })
      .catch((err) => {
        console.log('Ocurrio un error!  ', err);
      });
  }

  render() {
    //PANTALLA LOADING
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color="#0000ff" style={{flex: 1, alignSelf: 'center'}}/>;
    }
    return (
      <View>
        <FlatList
          data={this.state.platforms}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('PlatDetails', {plat: item},);
              }}
                style={{backgroundColor: 'black', paddingLeft: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 50,
                      marginBottom: 10,
                      marginRight: 30,
                      marginTop: 10,
                    }}
                    source={{uri: item.image_background}}
                  />

                  <View style={{flexDirection: 'column', marginTop: 30}}>
                    <Text
                      style={{
                        fontFamily: 'yoster',
                        color: '#feca57',
                        fontSize: 15,
                      }}>
                      {item.name}
                    </Text>

                    <Text styles={{color: 'grey'}}>
                      Cantidad de juegos: {item.games_count}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

export default PlatList;
