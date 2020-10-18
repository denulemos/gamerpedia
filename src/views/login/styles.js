import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botonLogin: {
    marginTop: 10,
    backgroundColor: '#FD7272',
    marginLeft: 70,
    marginRight: 70,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
  },
  botonLoginInh: {
    marginTop: 10,
    backgroundColor: 'grey',
    marginLeft: 70,
    marginRight: 70,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
  },
  botonRegistro: {
    backgroundColor: '#FC427B',
    marginLeft: 70,
    marginRight: 70,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  img: {
    alignSelf: 'center',
    width: 100,
    height: 100,

    marginBottom: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  titulo: {
    fontFamily: 'yoster',
    fontSize: 40,
    marginBottom: 45,
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
    color: 'white',
    textAlign: 'center',
  },
 
  input: {
    alignSelf: 'center'
  },
  textoBotonRegistro: {
    color: 'white',
    padding: 10,
    fontSize: 17,
    fontFamily: 'OpenSans-Regular',
  },
  textoBotonLogin: {
    color: 'white',
    padding: 10,
    fontSize: 17,
    fontFamily: 'OpenSans-Regular',
  },
});
