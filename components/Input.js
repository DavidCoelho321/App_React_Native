import React, { useRef, useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Animated, Switch } from "react-native";
import {Picker} from '@react-native-picker/picker';
import Fonts from '../styles/Fonts';
import Slider from '@react-native-community/slider';
import Separar from './separar';


const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
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


const Inputs = () => {
  const [isEnabled, setIsEnabled, text, onChangeText, selectedLanguage, setSelectedLanguage] = React.useState();
  const [number, onChangeNumber] = React.useState(null);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <FadeInView>
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Usuario"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Senha"
        keyboardType="numeric"
      />
      <Separar/>

      
    </SafeAreaView>
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});

export default Inputs;
