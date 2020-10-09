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
      plat: null,
    };
  }

  componentDidMount() {
    this.setState({
      plat: this.props.route.params.plat //Tomamos los parametros del otro activity
    });
  }

  render() {
    const {plat} = this.state;
    if (this.state.plat == null) {
      return <ActivityIndicator size="large" color="#0000ff" style={{flex: 1, alignSelf: 'center'}} />;
    }
    return (
      <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={{uri: this.state.plat.image_background}} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{this.state.plat.name}</Text>
          
          
         
        </View>
    </View>
  </View>
    );
  }
}

export default DevDetails;
