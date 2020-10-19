import React, {useState, useEffect} from "react";
import {
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {styles} from "./styles";
import GameServices from "../../services/gameService";
import Loading from "../../components/Loading/index";
import {FlatGrid} from "react-native-super-grid";
import Error from "../../components/error/index";

const PlatList = (props) => {
  const [platforms, setPlatforms] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    GameServices.getPlataformas()
      .then((results) => {
        if (results && results.data && results.data.results) {
          setPlatforms(results.data.results);
        setIsLoading(false)
        }
      })
      .catch((err) => {
        setPlatforms("none");
        setIsLoading(false)
      });
  }, []);


    if (isLoading) {
      return <Loading />;
    }
    if (platforms != "none") {
      return (
        <FlatGrid
          itemDimension={200}
          data={platforms}
          style={styles.gridView}
          spacing={10}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("PlatDetails", {plat: item});
              }}
              style={[styles.itemContainer, {backgroundColor: "black"}]}
            >
              <ImageBackground
                source={{uri: item.image_background}}
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

export default PlatList;
