import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {StackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const RootStack = StackNavigator({
  Home:{
    screen: HomeScreen,
  },

  Details:{
    screen : DetailsScreen,
  },
  initialRouteName : HomeScreen,
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
