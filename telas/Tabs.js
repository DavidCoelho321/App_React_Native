
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Home  from './Home';
import Sobre from './Sobre';
import AbrirConta from './AbrirConta';
import AppBalao from './AppBalao';
import MyButton from '../components/MyButton';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
const Tab = createBottomTabNavigator();

export default function Tabs() {

  return (
    <View>
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      initialRouterName="Home">
   
        <Tab.Screen name="App 1" component={Home}/>
        
        <Tab.Screen name="App 2" component={Sobre} />
        
      </Tab.Navigator>
  </View>
  );
}


