import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Parqueadero1 from '../screens/Parqueadero';
import Parqueadero2 from '../screens/Parqueadero2';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const ParqueaderoStack=createStackNavigator({
  Parqueadero: Parqueadero1,
})

ParqueaderoStack.navigationOptions={
  tabBarLabel:'Parqueadero1',
  tabBarIcon:({focused})=>(
    <TabBarIcon
      focused={focused}
      name={Platform.OS=='ios'?'ios-car':'md-car'}
    />
  ),
};

const Parqueadero2Stack=createStackNavigator({
  Parqueadero: Parqueadero2,
})

Parqueadero2Stack.navigationOptions={
  tabBarLabel:'Parqueadero2',
  tabBarIcon:({focused})=>(
    <TabBarIcon
      focused={focused}
      name={Platform.OS=='ios'?'ios-car':'md-car'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ParqueaderoStack,
  Parqueadero2Stack,
});
