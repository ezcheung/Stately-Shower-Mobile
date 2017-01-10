/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDU3qympK0n7Ts6ZsgRB2CqE39fUu_W2I8",
  authDomain: "stately-shower.firebaseapp.com",
  databaseURL: "https://stately-shower.firebaseio.com",
  storageBucket: "stately-shower.appspot.com",
  messagingSenderId: "507309554511"
};
const firebaseApp = firebase.initializeApp(config);

export default class statelyshowermobile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('statelyshowermobile', () => statelyshowermobile);
