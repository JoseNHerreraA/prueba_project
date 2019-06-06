import React, { Component } from 'react';
import { Alert, Button, TextInput,AppRegistry,StyleSheet, Text, View,Image} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin() {
    const { username } = this.state;
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

  render() {
    return (
      <View style={styles.container}>
      <Image
          style={{width: 390, height: 250, marginTop: 5}}
          source={{uri: 'https://moovitapp.com/index/es-419/public-transit-resources/location/site_8950094.jpg'}}
        />
     
        
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button color="#3cb371"
          title={'Ingresar'}
          onPress={this.onLogin.bind(this)}
        />
        <View style={styles.register}>
          <Text>Dont have account?</Text>
          <Text style={styles.link}> Register Now</Text>
        </View>  

     <Image
          style={{width: 210, height: 90, marginTop: 5}}
          source={{uri: 'http://www.acofi.edu.co/eiei2016/wp-content/uploads/2016/07/logo-utb-copia.jpg'}}
        />

      </View>
     
  
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000',

  },
  input: {
    width: 150,
    height: 40,
    padding: 10,
    //borderWidth: 1,
    borderColor: 'green',
    marginBottom: 50,
    backgroundColor: '#00000',
   
  },
  register: {
    marginTop: 20,
    flexDirection: 'row',
  },
  link: {
    color: 'steelblue',
    cursor: 'pointer',
  },

  //red: {
  // color: 'red',
//  }  
});