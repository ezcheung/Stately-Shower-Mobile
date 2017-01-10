import React from 'react';
import * as firebase from 'firebase';

// import { start, end, request } from '../models/DatabaseAPI';
// import Location from './location';
// import Requests from './requests';
import {
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

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Does it work?</Text>
      </View>
    )
  }
}