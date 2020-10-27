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
  
  useEffect(() => {
    traerDevelopers();
    setLoading(false);
  }, []);

  const traerDevelopers = () => {
    GameServices.getDev(page)
      .then((results) => {
        if (results && results.data && results.data.results) {
          setDevs(
            devs.concat(results.data.results)
          );
          if (results.data.next == null){
            setPage(null);
          }
          else{
            setPage(page + 1);
          }
        }
      })
      .catch((err) => {
        setDevs("none");
      });
    
  };
  
    if (isLoading) {
      return <Loading />;
    }
    if (devs != "none") {
      return (
        <FlatGrid
          itemDimension={200}
          data={devs}
          style={styles.gridView}
          ListFooterComponent={page != null ? FooterLoading : null}
          onEndReachedThreshold={0.5}
          onEndReached={page != null ? traerDevelopers : null}
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
