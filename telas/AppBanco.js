import  React, { useRef, useEffect } from 'react';
import {Animated, Button, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import InputsComplete from '../components/InputsComplete';
import Inputs from '../components/Inputs';
import Collors from '../styles/Collors';
import AssetExample from '../components/LogoBanco';
import MyButton from '../components/MyButton';
import Separar from '../components/separar';
import { Card } from 'react-native-paper';

 
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 
      style={{
        opacity: fadeAnim,       
      }}
    >
      {props.children}
    </Animated.View>
  );
}


export default function App({ navigation }) {
  return ( 
    <View style={Collors.bodyColor}>
     <FadeInView>
        <AssetExample />
      </FadeInView>  
       
         
        <Inputs/>
        <FadeInView>
            <MyButton
              title="Ajuda/Sobre"
              color="#841584"
              navigation = {navigation}
              destino = "Sobre"
              />
            <Separar/>
              <MyButton
              title="Abrir Conta"
              color="#baed2f"
              navigation = {navigation}
              destino = "AbreConta"
              />
        </FadeInView>
        <Separar/>
        <Separar/>
        <Separar/>
        <Separar/>
    </View>
  );
}