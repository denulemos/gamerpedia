import React, {useState, useEffect} from "react";
import { ImageBackground, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import GameServices from "../../services/gameService";
import {FlatGrid} from "react-native-super-grid";
import Loading from "../../components/Loading/index";
import Error from "../../components/error/index";
import FooterLoading from "../../components/footerLoading/index";

const GamesList = (props) => {
  const [juegos, setJuegos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  

 const traerJuegos = () => {
    GameServices.getGames(page)
      .then((results) => {
        if (results && results.data && results.data.results) {
          setJuegos(
            juegos.concat(results.data.results)
          );
        }
      })
      .catch((err) => {
        setJuegos(
          "none"
      );
      });
    setPage(page + 1);
  };

  useEffect(() => {
    traerJuegos();
    setLoading(
      false
    );
  }, []);

 
    if (isLoading) {
      return <Loading />;
    }
    if (juegos != "none") {
      return (
        <FlatGrid
          itemDimension={200}
          data={juegos}
          ListFooterComponent={FooterLoading}
          style={styles.gridView}
          keyExtractor={(item) => item.id.toString()}
          spacing={10}
          onEndReachedThreshold={0.5}
          onEndReached={traerJuegos}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("GameDetails", {juego: item});
              }}
              style={[styles.itemContainer, {backgroundColor: "black"}]}
            >
              <ImageBackground
                source={{uri: item.background_image}}
                style={{flex: 1}}
              >
                <Text style={styles.itemName}>{item.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      );
    } else {
      return <Error />;
    }
  
}

export default GamesList;
