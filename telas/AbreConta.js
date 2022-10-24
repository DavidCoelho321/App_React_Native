import React,{ useRef, useEffect } from 'react';
import { Text, View, Stylesheet, Button, Image, TextInput, SafeAreaView, Switch} from 'react-native';
import Collors from '../styles/Collors';
import Fonts from '../styles/Fonts';
import Tamanho from '../styles/Tamanho';
import MyButton from '../components/MyButton';
import Separar from '../components/separar';
import Input from '../components/InputsComplete';
export default function About( { navigation } ) {
  return (
    <View style={Collors.bodyColor}>
       <Text style={Fonts.FontSobre}> Abra Sua Conta !</Text>
       <Text style={Fonts.FontSobre}> Forneça seus dados abaixo</Text>
    <SafeAreaView>
      <Input/>
    </SafeAreaView>
        <MyButton
          title="Resetar"
          color="#311184"
          navigation = {navigation}
          destino = "Home"
      />
      <Separar/>
      <Button
        title="ABRIR CONTA"
        onPress={() => {
          alert("ABERTURA DE CONTA CONCLUÍDA Nome: Test input; Idade: 20; Genero: Feminino; Limite: 999;")
        
        }
}
      />
      
    </View>
  )
}
