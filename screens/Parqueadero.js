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

export default class Parqueadero1 extends React.Component {
  static navigationOptions = {
    title: 'Parqueadero 1',
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
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerRuta}/>
                <View style={styles.containerRuta}/>
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
                <View style={styles.containerPPlibre}/>
                <View style={styles.containerPPocupado}/>
                <View style={styles.containerPPlibre}/>
            </View>
            <View style={styles.containerTexto}>
                <Text style={styles.texto}>Disponibles: </Text>
                <Text style={styles.texto}>13</Text>
                <Text style={styles.texto}>Ocupados: </Text>
                <Text style={styles.texto}>11</Text>
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
        width:32,
        height:90,
        backgroundColor:'#008000',
    },
    containerPPocupado:{
        width:32,
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
        width:32,
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
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
  });
  