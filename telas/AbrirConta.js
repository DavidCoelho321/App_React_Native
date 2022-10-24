import React,{ useRef, useEffect } from 'react';
import { Text, View, Stylesheet, Button, Image, TextInput, SafeAreaView, Switch} from 'react-native';
import Collors from '../styles/Collors';
import Fonts from '../styles/Fonts';
import Tamanho from '../styles/Tamanho';
import MyButton from '../components/MyButton';
import Separar from '../components/separar';
import Input from '../components/Input';
export default function About( { navigation } ) {
  return (
    <View style={Collors.bodyColorHome}>
       <Text style={Fonts.FontSobre}> Forneça seus dados abaixo</Text>
    <SafeAreaView>
      <Input/>
    </SafeAreaView>
        <MyButton
          title="Abrir Conta"
          color="#311184"
          navigation = {navigation}
          destino = "Home"
      />
      <Separar/>
     
}
      
      
    </View>
  )
}
