import React from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class Parqueadero2 extends React.Component {
  static navigationOptions = {
    title: 'Parqueadero 2',
  };

  render(){
      return(
        <View style={styles.container}>
            <View style={styles.containerTexto}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/Imagenes/Logo_UTB.jpg')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
            <Text style={styles.texto}>Ubicación: </Text>
            </View>          
            <View style={styles.containerParqueo}>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPocupado}/>
            </View>
            <View style={styles.containerParqueo}/>
            <View style={styles.containerParqueo}>
                <View style={styles.containerRuta}/>
                <View style={styles.containerRuta}/>
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPocupado}/>
            </View>
            <View style={styles.containerTexto}>
                <Text style={styles.texto}>Disponibles: </Text>
                <Text style={styles.texto}>10</Text>
                <Text style={styles.texto}>Ocupados: </Text>
                <Text style={styles.texto}>10</Text>
            </View>
        </View>
      );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
    },
    containerPPlibre:{
        width:36,
        height:90,
        backgroundColor:'#008000',
    },
    containerPPocupado:{
        width:36,
        height:90,
        backgroundColor:'#ff0000',
    },
    containerParqueo:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#dcdcdc',
    },
    containerRuta:{
        width:36,
        height:90,
        backgroundColor:'#dcdcdc',
    },
    texto:{
        fontFamily:'normal',
        fontSize:30,
    },
    containerTexto:{
        flex: 2,
        alignItems:'center',
        backgroundColor: '#fff',
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 10,
      marginLeft: -10,
    },
});
