import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Parqueaderos',
  };

  render() {
    const {navigate}=this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/Imagenes/Logo_UTB.jpg')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedTextTitle}>Parqueaderos UTB</Text>
            <Text style={styles.getStartedText}>
              En esta aplicacion tendra acceso a información en tiempo real de la disponibilidad de los parqueaderos de la Universidad
            </Text>
          </View>
        </ScrollView>
        <View style={styles.containerBlock}>
          <Button 
            onPress={() => navigate('ParqueaderoStack')}
            title='Parqueadero 1'
            color='#32cd32'
            accessibilityLabel='Información sobre Parqueadero # 1'
          />
          <Button 
            onPress={() => navigate('Parqueadero2Stack')}
            title='Parqueadero 2'
            color='#32cd32'
            accessibilityLabel='Información sobre Parqueadero # 2'
          />
          <Button 
            title='Parqueadero 3'
            color='#32cd32'
            accessibilityLabel='Información sobre Parqueadero # 3'
          />
          <Button
            title='Parqueadero 4'
            color='#32cd32'
            accessibilityLabel='Información sobre Parqueadero # 4'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerBlock:{
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
  containerPark: {
    width:490,
    height:50,
    backgroundColor: '#32cd32',
  },
  textContainerPark:{
    fontFamily:'normal',
    fontSize:30,
    color: '#ffffff',
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
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  getStartedTextTitle: {
    fontSize: 40,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
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
});
