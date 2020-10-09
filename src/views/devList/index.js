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
      <View >
      <FlatList 
    
        data={this.state.devs}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={{backgroundColor: 'black', paddingLeft: 10}}>
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
                      color: 'white',
                      fontFamily: 'yoster',
                      color: '#feca57',
                      fontSize: 15,
                    }}>
                    {item.name}
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

export default DevList;
