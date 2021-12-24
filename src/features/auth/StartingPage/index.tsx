import {
  NativeStackHeaderProps,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import TikTokButton from "../../../components/TikTokButton";
import TikTokText from "../../../components/TiktokText";
import styles from "./styles";

export default function StartingPage({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) {
  return (
    <SafeAreaView style={styles.startingPageContainer}>
      <View style={{ marginTop: 50 }}></View>
      <TikTokText style={styles.logoTextStyle}>TikTok Amigo</TikTokText>
      <View style={styles.buttonContainer}>
        <TikTokButton
          onPress={() => navigation.navigate("Home")}
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
    </SafeAreaView>
  );
}
