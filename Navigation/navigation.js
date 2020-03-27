import React, { Component } from "react";
import {
    createAppContainer,
    createSwitchNavigator
    
  } from "react-navigation";
  import {createBottomTabNavigator } from 'react-navigation-tabs';
  import { Platform, StyleSheet, Text, View, Image,  Dimensions } from "react-native";
  import {createStackNavigator} from 'react-navigation-stack'
  import Images from "../common/Images";
  // import Fonts from "../common/Fonts";
  import { normalizeFont as np } from "../common/NormalizeFont";
  import { normalizeWidth as nw } from "../common/NormalizeWidth";
  import { normalizeHeight as nh } from "../common/NormalizeHeight";
  import colors from "../common/Colors";
import Order from "../screens/Journal";
import FeedScreen from "../screens/Feed";
import LearnScreen from "../screens/LearnScreen";
import Status from "../screens/Status";
import ConnectScreen from "../screens/ConnectScreen";
import Login from "../screens/Login";

const Del=createStackNavigator({
  screen:FeedScreen
})
const Ord=createStackNavigator({
  screen:Order
})
const Pro=createStackNavigator({
  screen:Status
})
const MainBottomNavigator = createBottomTabNavigator(
    {
      Feed: {
        screen: Del,
      },
      Myjournal: {
        screen: Ord,
      },
      Status: {
        screen: Pro,
      },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        headerBackAllowFontScaling: true,
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName=null
          if (routeName.includes("Feed")) {
            iconName = focused ? Images.feed : Images.feed;
          } else if (routeName.includes("Myjournal")) {
            iconName = focused ? Images.diary : Images.diary;
          } else if (routeName.includes("Status")) {
            iconName = focused ? Images.logo : Images.logo;
          }
          return (
            <Image
              source={iconName}
              style={{marginTop:nh(40),marginBottom:nh(30),width:nw(24),height:nh(24),resizeMode:'contain',opacity:focused?1:0.5}}
              color={tintColor}
            />
          );
        }
      }),
      tabBarOptions: {
        
        activeTintColor: "#000",
        style: {
          justifyContent: "center",
          alignItems: "center",
          height:nh(50),
          backgroundColor: 'white'
        },
        labelStyle: {
          fontSize:np(13),
         // fontFamily: Fonts.type.bold,
          fontWeight: "200",
          marginTop:nh(10),
          
     
        },
        headerBackTitleStyle: {
          color: "#000",
         // fontFamily: Fonts.type.base,
          fontSize: np(17)
        }
      }
    }
  );
const switchNavigator=createSwitchNavigator({
  Login:Login,
  MainPage:MainBottomNavigator,
},{
  header:null
})
const NavigationApp = createAppContainer(switchNavigator);

export default NavigationApp;