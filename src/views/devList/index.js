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
      return (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{flex: 1, alignSelf: 'center'}}
        />
      );
    }
    return (
      <View>
        <FlatList
          data={this.state.devs}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('DevDetails', {dev: item});
                }}
                style={styles.button}>
                <View style={styles.viewFlex}>
                  <Image
                    style={styles.image}
                    source={{uri: item.image_background}}
                  />

                  <View style={styles.itemName}>
                    <Text style={styles.title}>{item.name}</Text>
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
