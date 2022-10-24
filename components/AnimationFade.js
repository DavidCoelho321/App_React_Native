import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';


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
