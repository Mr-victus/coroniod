/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NavigationApp from './Navigation/navigation';
import messaging from '@react-native-firebase/messaging';
import { firebase } from '@react-native-firebase/messaging';
import database from '@react-native-firebase/database';
const App = () => {
  
  messaging().getToken()
  .then(async fcmToken => {
    if (fcmToken) {
      console.log(fcmToken)
      const ref = database().ref(`/users/saswath`);
 
  await ref.set({
    fcmToken,
    name: 'Saswath phone',
    role: 'admin',
  });
    } else {
      // user doesn't have a device token yet
      console.log('ee')
    } 
  });
  return (
    <NavigationApp/>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;