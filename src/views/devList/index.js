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

class DevList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devs: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    GameServices.getDev()
      .then((results) => {
        if (results && results.data && results.data.results) {
          this.setState({
            devs: results.data.results,
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
      //iteracion por dev
      <View>
        <FlatList
          data={this.state.devs}
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

export default DevList;
