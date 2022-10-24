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
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Idade"
        keyboardType="numeric"
      />
      <Separar/>
      <Text style={Fonts.FontType}>Selecione o Gênero</Text>
       <Picker style={{padding: 10,}}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
           <Picker.Item label="..." value="" />
          <Picker.Item label="MASCULINO" value="M" />
          <Picker.Item label="FEMININO" value="F" />
      </Picker>
       <Separar/>
      <Text style={Fonts.FontType}>Seu Limite</Text>
      <Slider
          style={{width: 400, height: 100,}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
      />
       <Separar/>
       <Text style={Fonts.FontType}>Sou Estudante <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /></Text> 
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
