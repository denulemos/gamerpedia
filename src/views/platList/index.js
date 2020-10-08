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
      return <ActivityIndicator />;
    }
    return (
      //iteracion por plataforma
      <View>
        <FlatList
          data={this.state.platforms}
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

export default PlatList;
