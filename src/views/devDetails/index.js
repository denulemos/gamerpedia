import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import {styles} from "./styles";
import Loading from "../../components/Loading/index";
import {FlatGrid} from "react-native-super-grid";
import GameServices from "../../services/gameService";
import Error from "../../components/error/index";

const DevDetails = (props) => {
  const [dev, setDev] = useState(null);
  const [juegos, setJuegos] = useState(null);

  useEffect(() => {
    setDev(props.route.params.dev);
    GameServices.getGamesForDev(props.route.params.dev.id)
      .then((results) => {
        if (results && results.data && results.data.results) {
          setJuegos(results.data.results);
        }
      })
      .catch((err) => {
        setJuegos("none");
      });
  }, []);

  if (juegos == null) {
    return <Loading />;
  }

  if (juegos != "none") {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{uri: dev.image_background}} />

        <View style={styles.bodyContent}>
          <Text style={styles.name}>{dev.name}</Text>
          <Text style={styles.datos}>Cantidad de juegos {dev.games_count}</Text>
        </View>

        <Text style={styles.juegosTitle}>Juegos realizados</Text>
        <FlatGrid
          removeClippedSubviews={true}
          itemDimension={200}
          data={juegos}
          style={styles.gridView}
          spacing={10}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[styles.itemContainer, {backgroundColor: "black"}]}
              onPress={() => {
                props.navigation.navigate("GameDetails", {
                  juego: item
                });
              }}
            >
              <ImageBackground
                source={{uri: item.background_image}}
                style={{flex: 1}}
              >
                <Text style={styles.itemTitle}>{item.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  } else {
    return <Error />;
  }
};

export default DevDetails;
