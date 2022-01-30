import React, { useEffect, useRef, useState } from "react";
import {
 
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { View,  SafeAreaView, Dimensions } from "react-native";
import TikTokButton from "../../../components/TikTokButton";
import styles from "./styles";
import Animated, { 
  useSharedValue,
  BounceInDown,
  BounceInUp
} from 'react-native-reanimated';


const HEIGHT = Dimensions.get('window').height;


export default function StartingPage({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) {

  const top = useSharedValue(0);
  const opacity = useSharedValue(0)
  const viewRef = useRef<View>(null)
  const [ showTitle, setShowTitle] = useState(false)


  useEffect(()=>{


    setShowTitle(true)
  },[])

  return (
    <View style={styles.startingPageContainer}>
      <View style={{marginTop:20}}></View>

      {showTitle&&(
           <Animated.Text
           entering={BounceInUp.duration(1500)}
           style={styles.logoTextStyle}>TikTok Amigo</Animated.Text>
     
      )}
   
      <View ref={viewRef} style={styles.buttonContainer}>
        <TikTokButton
          onPress={() => {opacity.value = 0; top.value=0;  navigation.navigate("SignUp")}}
          style={styles.buttonMargin}
        >
          Registrarte
        </TikTokButton>
        <TikTokButton
          onPress={() => navigation.navigate('Login')}
          style={styles.buttonMargin} mode="outlined">
          Iniciar Sesión
        </TikTokButton>
      </View>
    </View>
  );
}
