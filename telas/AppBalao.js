import  React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import MyButton from '../components/MyButton'
import Mensagem from '../components/Mensagem'
import Separar from '../components/separar'
export default function AppBalao({ navigation }) {
  const padrao = require('../assets/balloon_red.jpg')
  const estourado = require('../assets/popped_balloon_red.jpg')
  const baloes = { padrao, estourado }
  const [selected, setSelected] = useState(baloes.padrao)
  const msg = {selected}==baloes.padrao ? 0 : 1
  return (
    <View style={styles.container}>
     <Image style={styles.logo} source={selected} />
      {msg == 0 ? <h1>ok</h1> : ''}
      <button onClick={() => setSelected(baloes.estourado) 
      }> ESTOURAR BALAO</button>
      <Separar/>
      <MyButton
       title="Voltar"
          color="blue"
          navigation={navigation}
          destino="Home"
      />
       <Separar/>
      <MyButton
       title="Resetar"
          color="blue"
          navigation={navigation}
          destino="Home"
      />
    </View>
  );
}
//<button onClick={() => setSelected(baloes.estourado)}> Estourar</button>
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  
  logo: {
    height: 300,
    width: 128,
  }
});
