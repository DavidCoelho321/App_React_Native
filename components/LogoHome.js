import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Fonts from '../styles/Fonts';
export default function AssetExample() {
  return (
    <View style={styles.container}>
    
      <Image style={styles.logo} source={require('../assets/GranbIcon.png')} />

      <Text style={Fonts.FontType}>    Faça Login ou Cadastre-se</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  logo: {
    height: 78,
    width: 57,
  }
});
