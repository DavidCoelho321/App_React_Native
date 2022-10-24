
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Home  from './Home';
import Sobre from './Sobre';
import AbrirConta from './AbrirConta';
import AppBalao from './AppBalao';
import AppBanco from './AppBanco';
import AbreConta from './AbreConta';
import Tabs from './Tabs';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
const Stack = createNativeStackNavigator();


export default function Route() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator initialRouterName="Home">
          <Stack.Screen name="Home" component={ Home }/>  
          <Stack.Screen name="Sobre" component={ Sobre }/> 
          <Stack.Screen name="AbrirConta" component= { AbrirConta }/>  
          <Stack.Screen name="AppBalao" component= { AppBalao }/>
          <Stack.Screen name="AppBanco" component= { AppBanco }/>
          <Stack.Screen name="AbreConta" component= { AbreConta }/>
          <Stack.Screen name="Tabs" component= { Tabs }/>
         
        </Stack.Navigator>
        
      </NavigationContainer>
      
    </View>
  );
}


