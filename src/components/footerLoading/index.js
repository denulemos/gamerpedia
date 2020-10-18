import * as React from "react";
import {View} from 'react-native';
import Loading from "../Loading/index";
import styles from './styles';

const FooterLoading = () => { 
        return (
    <View style={styles.container}>
      <Loading />
    </View>
  );

 
};

export default FooterLoading;
