import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RentScreen from '../pages/Rent'
import BuyScreen from '../pages/Buy'
import HomeScreen from '../pages/Home'
import LoginScreen from '../pages/Login'
import ImvScreen from '../pages/Imv'
import DashboardScreen from '../pages/Dashboard'

const Stack = createStackNavigator();

export default function PropRoutes() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Buy" component={BuyScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Rent" component={RentScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Imovel" component={ImvScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}