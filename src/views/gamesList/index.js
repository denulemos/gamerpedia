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
    //PANTALLA LOADING
    if (this.state.isLoading) {
      return <ActivityIndicator />;
    }
    return (
      //iteracion por juego
      <View>
        <FlatList
          data={this.state.juegos}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                
                <View style={{flexDirection: 'column'}}>
                  <Text >
                    {item.name} 
                  </Text>
                 
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
