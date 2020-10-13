import React, {Component} from 'react';
import {ScrollView, View, Image, TouchableOpacity} from 'react-native';
import {  Drawer, Text } from 'react-native-paper';
import styles from './styles';
import { DrawerActions } from '@react-navigation/native';
class CustomDraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
   
  }
  
    render () {
      return (
      <View style={{ backgroundColor: 'black', flex: 1}}>

<View style={{backgroundColor: '#4b4b4b' , flexDirection: 'row', paddingBottom: 50, paddingTop: 50}}>
<Image style={styles.user} source={require('../assets/img/user.png')}/>
<Text style={{color: 'white', alignSelf: 'flex-end', padding: 5, fontSize: 15, paddingLeft: 10, paddingBottom: 10, fontFamily: 'yoster'}}>Hola</Text>
<TouchableOpacity  onPress={() => {
            this.props.navigation.closeDrawer();
          }}><Image
          style={styles.logoclose}
         
          source={require("../assets/img/more.png")}
          
        /></TouchableOpacity>
         
 
</View>


<TouchableOpacity style={{flexDirection: 'row', padding: 15,  position: 'absolute', bottom: 0}}>
<Image style={styles.logout} source={require('../assets/img/logout.png')}/>
  <Text style={{paddingLeft: 15, paddingTop: 5 ,  fontFamily: 'OpenSansRegular', color:'#7d5fff'}}>Log Out</Text>
</TouchableOpacity>

      </View>
      );
    }
  }
  
 
  
  export default CustomDraw;