import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
	paddingTop: 50,
	backgroundColor: 'black'
  },
  botonLogin: {
    marginTop: 10,
    backgroundColor: '#c56cf0',
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
    backgroundColor: '#9c88ff',
    marginLeft: 70,
    marginRight: 70,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  img: {
    
    
    width: 190,
    height: 190,
    alignSelf: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontFamily: 'yoster',
    fontSize: 45,
    alignSelf: 'center',
    color: '#cd84f1',
  },
  subtitulo: {
    fontFamily: 'OpenSans-Regular',
    alignSelf: 'center',
	marginBottom: 20,
	color: 'grey'
  },
  input: {
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 10,
    fontFamily: 'OpenSans-Light',
  },
  textoBotonRegistro: {
    color: 'black',
    padding: 10,
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
  },
  textoBotonLogin: {
    color: 'black',
    padding: 10,
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
  },
});
