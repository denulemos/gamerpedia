import React, {useState, useEffect} from "react";
import {View, Text, Image, ImageBackground} from "react-native";
import {styles} from "./styles";
import Loading from "../../components/Loading/index";
import {FlatGrid} from "react-native-super-grid";
import GameServices from "../../services/gameService";
import Error from "../../components/error/index";

const DevDetails = (props) => {
  const [juego, setJuego] = useState(null);
  const [fotos, setFotos] = useState(null);

  useEffect(() => {
    setJuego(props.route.params.juego);

    GameServices.getScreenshotGames(props.route.params.juego.id)
      .then((results) => {
        if (results && results.data && results.data.results) {
          setFotos(results.data.results);
        }
      })
      .catch((err) => {
        setFotos("none");
      });
  }, []);

  if (juego == null || fotos == null) {
    return <Loading />;
  }
  if (fotos != "none") {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{uri: juego.background_image}} />

        <View style={styles.bodyContent}>
          <Text style={styles.name}>{juego.name}</Text>

          <Text style={styles.datos}>Fecha de Salida {juego.released}</Text>

          <Text style={styles.datos}>Rating General {juego.rating}</Text>

          <Text style={styles.puntuacion}>
            ({juego.ratings_count} puntuaciones)
          </Text>
        </View>
        <View style={styles.containerScreens}>
          <Text style={styles.fotosContainer}>Fotos</Text>

          <FlatGrid
            itemDimension={130}
            data={fotos}
            style={styles.gridView}
            spacing={10}
            renderItem={({item}) => (
              <View style={[styles.itemContainer, {backgroundColor: "black"}]}>
                <ImageBackground
                  source={{uri: item.image}}
                  style={{flex: 1}}
                ></ImageBackground>
              </View>
            )}
          />
        </View>
      </View>
    );
  } else {
    return <Error />;
  }
};

export default DevDetails;
