import React, {Component} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import {styles} from './styles';


class PlatDetails extends Component {
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
      return <ActivityIndicator size="small" color="#0000ff" style={{flex: 1, alignSelf: 'center'}}/>;
    }
    return (
      <View >
       
        
         <Text style={styles.itemText}>Holis </Text>

        
      </View>
    );
  }
}

export default PlatDetails;
