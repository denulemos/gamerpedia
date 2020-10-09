import React, {Component} from 'react';
import {
  View,

  ActivityIndicator,
  Text,

} from 'react-native';
import {styles} from './styles';


class GameDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        juego: null,
    };
  }

  componentDidMount() {
    console.log(this.props.route.params.juego)
    this.setState({
      juego: this.props.route.params.juego //Tomamos los parametros del otro activity
    });
  }

  render() {
    //PANTALLA LOADING
    const {juego} = this.state;
    //juego es unos segundos null, conviene poner un loading
    if (this.state.juego == null) {
      return <ActivityIndicator size="large" color="#0000ff" style={{flex: 1, alignSelf: 'center'}}/>;
    }
    return (
      <View >
       
        
         <Text style={styles.itemText}>{this.state.juego.name} </Text>

        
      </View>
    );
  }
}

export default GameDetails;
