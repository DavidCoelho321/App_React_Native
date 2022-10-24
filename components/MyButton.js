import React, { useRef, useEffect } from 'react';
import {Animated, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';



export default function MyButton(props) { 
   return (

       <Button
          title={props.title}
          color={props.color}
          onPress={() => props.navigation.navigate(props.destino)}
        />
      
   );
}
 