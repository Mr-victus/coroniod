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
const App = () => {
  
  messaging().getToken()
  .then(fcmToken => {
    if (fcmToken) {
      console.log(fcmToken)
    } else {
      // user doesn't have a device token yet
      console.log('ee')
    } 
  });
  //  messaging().onMessage(remoteMessage => {
  //     console.log('FCM Message Data:', remoteMessage);
 
  //     // Update a users messages list using AsyncStorage
  //     //const currentMessages = await AsyncStorage.getItem('messages');
  //     // const messageArray = JSON.parse(currentMessages);
  //     // messageArray.push(remoteMessage.data);
  //     //await AsyncStorage.setItem('messages', JSON.stringify(messageArray));
  //   });
 
  
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
