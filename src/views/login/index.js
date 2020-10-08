// Dependencies
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import TextInput from '../../components/TextInput/index';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usr: '',
      psw: '',
      botonHabilitado: false
    };
    this.handleUser = this.handleUser.bind(this);
    this.handlePass = this.handlePass.bind(this);
  }

  handleUser(value){
    this.setState({usr : value})
    this.habilitarBoton()
  }
  handlePass(value){
    this.setState({psw : value})
    this.habilitarBoton()
  }
habilitarBoton(){
   (this.state.usr != '' && this.state.psw != '') ? this.setState({botonHabilitado : true}) :  this.setState({botonHabilitado : false})
}
  render() {
    return (
      <View style={styles.container}>
         <Image  source={require('../../assets/img/mario.png')} style={styles.img}/>
        <Text style={styles.titulo}>Gamerpedia</Text>
       
        
       
        <TextInput label={'Usuario'} secure={false} style={styles.input} handle={this.handleUser}/>
        <TextInput label={'Contraseña'} secure={true} style={styles.input} handle={this.handlePass}/>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate("GamesList");}} style={this.state.botonHabilitado ? styles.botonLogin : styles.botonLoginInh} disabled={!this.state.botonHabilitado}>
          <Text style={styles.textoBotonLogin}>Ingresar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.botonRegistro}>
          <Text style={styles.textoBotonRegistro}>Registrarme</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
