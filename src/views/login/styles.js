import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: 'black',
    paddingLeft: 40,
    paddingRight: 40,
  },
  botonLogin: {
    marginTop: 10,
    backgroundColor: '#B53471',
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
    backgroundColor: '#833471',
    marginLeft: 70,
    marginRight: 70,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  img: {
    alignSelf: 'center',
    width: 70,
    height: 70,

    marginBottom: 20,
  },
  titulo: {
    fontFamily: 'yoster',
    fontSize: 40,
    marginBottom: 45,

    color: '#B53471',
    textAlign: 'center',
  },
  subtitulo: {
    fontFamily: 'OpenSans-Regular',
    alignSelf: 'center',
    marginBottom: 70,
    color: 'grey',
  },
  input: {
    alignSelf: 'center',
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
