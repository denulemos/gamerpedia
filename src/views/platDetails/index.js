import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {styles} from "./styles";
import Loading from "../../components/Loading/index";
import GameServices from "../../services/gameService";
import Error from "../../components/error/index";

const DevDetails = (props) => {
  const [plat, setPlat] = useState(null);
  const [objetoPlat, setObjetoPlat] = useState(null);
  const [arrJuegos, setArrJuegos] = useState([]);
  
  
  const getDescripciones = () => {
    GameServices.getPlatformDescription(props.route.params.plat.id)
      .then((results) => {
        if (results && results.data) {
        setObjetoPlat(
            results.data
          );
        }
      })
      .catch((err) => {
        setObjetoPlat(
         "none"
        );
      });
  };

  const juegosPlataforma = () => {
    return arrJuegos.map((item) => {
      return (
        <View key={item.id} style={styles.viewItem}>
         <Text style={styles.textItem}>{item.name}</Text>
        </View>
      );
    });
  };

  useEffect(() => {
   setPlat(props.route.params.plat);
   setArrJuegos(props.route.params.plat.games);
   getDescripciones();
  }, []);



    if (objetoPlat == null) {
      return <Loading />;
    }
    if (objetoPlat != "none") {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: plat.image_background}} />

          <View style={styles.bodyContent}>
            <Text style={styles.name}>{plat.name}</Text>
            <Text
              style={styles.cantJuegos}
            >
              Cantidad de juegos {plat.games_count}
            </Text>
          </View>

          <View style={{flex: 1}}>
            <Text style={styles.titulo}>Descripcion (English)</Text>
            <Text style={styles.descripcion}>
              {objetoPlat.description == ""
                ? "No hay descripcion disponible para esta plataforma por el momento :("
                : objetoPlat.description.replace(/(<([^>]+)>)/gi, "")}
            </Text>
          </View>

          <Text style={styles.titulo}>Algunos juegos de esta plataforma</Text>
          <View style={styles.listaJuegos}>
          {juegosPlataforma()}
          </View>
        
        </ScrollView>
      );
    } else {
      return <Error />;
    }
  
}

export default DevDetails;
