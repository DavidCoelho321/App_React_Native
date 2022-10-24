import React, { useRef, useEffect } from 'react';
import { Animated, Button, Text, View, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import Constants from 'expo-constants';
import Collors from '../styles/Collors';
import AssetExample from '../components/LogoHome';
import MyButton from '../components/MyButton';
import Separar from '../components/separar';
import { Card } from 'react-native-paper';

const FadeInView = (props) => {
  
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from './firebaseconfing';

export default function Home({ navigation }) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  
async function createUser() {
  await createUserWithEmailAndPassword(auth, email, password)
  .then(value => {
    console.log('cadastrado \n' + value.user.uid);
  })
  .catch(erro => console.log(erro));
};

async function login() {
  await signInWithEmailAndPassword(auth, email, password)
  .then(value => {
    console.log('logado');
  })
  .catch(erro => console.log(erro));
};

  return (
    <View style={Collors.bodyColorHome}>
      <FadeInView>
        <AssetExample />
      </FadeInView>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={value => setEmail(value)}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={value => setPassword(value)}
          placeholder="**********"
          keyboardType="numeric"
        />
      </SafeAreaView>

      <FadeInView>
        <Button
          title="Login"
          color="blue"
          navigation={navigation}
          onpress={() => login()}
        />
        <Separar />
        <Button
          title="Cadastre-se"
          color="#baed2f"
          navigation={navigation}
          onpress={() => createUser()}
        />
      </FadeInView>
      <Separar />
      <Separar />
      <MyButton
        title="App Avaliacao 1"
        color="orange"
        navigation={navigation}
        destino="AppBalao"
      />
      <Separar />
      <MyButton
        title="App Avaliacao 2"
        color="red"
        navigation={navigation}
        destino="AppBanco"
      />
      <Separar />
    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});