import React, { ReactNode } from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

interface TikTokSafeAreaViewProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export default function TikTokSafeAreaView(props: TikTokSafeAreaViewProps) {
  const { children, style } = props;
  return (
    <SafeAreaView style={[styles.safeAreaViewContainer, style]}
    >
      {children}
    </SafeAreaView>
  );
}
