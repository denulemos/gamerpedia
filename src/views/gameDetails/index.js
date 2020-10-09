import React, {Component} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import {styles} from './styles';


class DevDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      juego: null,
    };
  }

  componentDidMount() {
    this.setState({
      juego: this.props.route.params.juego //Tomamos los parametros del otro activity
    });
  }

  render() {
    const {juego} = this.state;
    if (this.state.juego == null) {
      return <ActivityIndicator size="large" color="#0000ff" style={{flex: 1, alignSelf: 'center'}} />;
    }
    return (
      <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={{uri: this.state.juego.background_image}} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{this.state.juego.name}</Text>
          
          
         
        </View>
    </View>
  </View>
    );
  }
}

export default DevDetails;
