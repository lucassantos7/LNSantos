import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PropsBuy from '../pages/PropsBuy.js';
import PropsRent from '../pages/PropsRent.js';
import PropsAll from '../pages/Prop';

import All from 'react-native-vector-icons/MaterialIcons'; 
import Rent from 'react-native-vector-icons/Ionicons';
import Buy from 'react-native-vector-icons/FontAwesome5';


const Tab = createMaterialTopTabNavigator();


export default function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions = { {
        labelStyle : { fontSize : 12, fontWeight:'bold', } ,    
        activeTintColor:'#fff',
        style : { backgroundColor : '#486ff9' } , 
        indicatorStyle:{
            backgroundColor:'#fff'
        }  
  } } lazy={true} tabBarPosition='bottom'>
      <Tab.Screen 
        name="Todas" 
        component={PropsAll} 
        options={{ headerShown: false }} 
        tabBarOptions = { {
            tabBarLabel:'Todas',
            tabBarIcon:({ color }) => (
            <All name='all-inbox'size={15} color={color}/>),
        
        }}/>
      <Tab.Screen 
        name="Comprar" 
        component={PropsBuy} 
        options={{ headerShown: false }}
        tabBarOptions = { {
            tabBarLabel:'Todas',
            tabBarIcon:({ color }) => (
            <Buy name='dollar-sign'size={15} color={color}/>),
        
        }}
        />
      <Tab.Screen 
        name="Alugar" 
        component={PropsRent} 
        options={{ headerShown: false }}
        tabBarOptions = { {
            tabBarLabel:'Todas',
            tabBarIcon:({ color }) => (
            <Rent name='home-city'size={15} color={color}/>),
        
        }}
        />
    </Tab.Navigator>
  );
}