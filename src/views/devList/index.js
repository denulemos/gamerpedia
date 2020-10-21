import React, {useState, useEffect} from "react";
import {Text, TouchableOpacity, ImageBackground} from "react-native";
import Loading from "../../components/Loading/index";
import {styles} from "./styles";
import GameServices from "../../services/gameService";
import {FlatGrid} from "react-native-super-grid";
import Error from "../../components/error/index";
import FooterLoading from "../../components/footerLoading/index";

const DevList = (props) => {
  const [devs, setDevs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  

  const traerDevelopers = () => {
    GameServices.getDev(page)
      .then((results) => {
        if (results && results.data && results.data.results) {
          setDevs(
            devs.concat(results.data.results)
          );
        }
      })
      .catch((err) => {
        setDevs("none");
      });
    setPage(page + 1);
  };

  useEffect(() => {
    traerDevelopers();
    setLoading(false);
  }, []);
 



    if (isLoading) {
      return <Loading />;
    }
    if (devs != "none") {
      return (
        <FlatGrid
          itemDimension={200}
          data={devs}
          style={styles.gridView}
          ListFooterComponent={FooterLoading}
          onEndReachedThreshold={0.5}
          onEndReached={traerDevelopers}
          spacing={10}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("DevDetails", {dev: item});
              }}
              style={[styles.itemContainer, {backgroundColor: "black"}]}
            >
              <ImageBackground
                source={{uri: item.image_background}}
                style={styles.imageBackgroundSty}
              >
                <Text style={styles.title}>{item.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      );
    } else {
      return <Error />;
    }
  
}

export default DevList;
