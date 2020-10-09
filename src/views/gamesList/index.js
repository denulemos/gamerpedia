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

class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      juegos: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    GameServices.getGames()
      .then((results) => {
        if (results && results.data && results.data.results) {
          this.setState({
            juegos: results.data.results,
            isLoading: false,
          });
        }
      })
      .catch((err) => {
        console.log('Ocurrio un error!  ', err);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color="#0000ff" style={{flex: 1, alignSelf: 'center'}}/>;
    }
    return (
      <View style={{backgroundColor: 'black'}}>
        <FlatList 
      
          data={this.state.juegos}
          renderItem={({item}) => {
            return (
              <TouchableOpacity 
              onPress={() => {
                this.props.navigation.navigate('GameDetails', {juego: item},);
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
                    source={{uri: item.background_image}}
                  />

                  <View style={{flexDirection: 'column', marginTop: 30}}>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'yoster',
                        color: '#feca57',
                        fontSize: 15,
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{color: 'white', fontFamily: 'OpenSans-Regular', fontSize: 12}}>
                      Fecha de Salida : {item.released}
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

export default GamesList;
