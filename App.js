import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Header,
  Button,
  StatusBar,
  TouchableOpacity,
  Alert,
  TextInput,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MyDrawer from './src/routes/Home.routes.js'


export default function App(){
  
  return ( 
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
    
    )

}


