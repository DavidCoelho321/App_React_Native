import React from 'react';
import { Text, View, Stylesheet, Button, Image} from 'react-native';
import Collors from '../styles/Collors';
import Fonts from '../styles/Fonts';
import Tamanho from '../styles/Tamanho';
import MyButton from '../components/MyButton';
import Separar from '../components/separar';
export default function About( { navigation } ) {
  return (
    <View style={Collors.bodyColor}>
      <Text style={Fonts.FontSobre}> Somos a maior instituição financeira da américa latina.</Text>
      <Separar/>
      <Text style={Fonts.FontSobre}> Estamos presentes em mais de 100 países   </Text>
      <Separar/>
      <Text style={Fonts.SaibaMais} href="https://mrrobot.fandom.com/wiki/E_Corp" target="_blank"> Clique e Saiba Mais</Text>
      
      <Separar/>
       
      <Image style={Tamanho.logo} source={require('../assets/ecorp.jpg')} />
      <MyButton
         title="Retornar"
              color="#841584"
              navigation = {navigation}
              destino = "Home"
      />
      
    </View>
  )
}
