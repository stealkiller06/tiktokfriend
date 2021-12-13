import React, { ReactNode } from "react";
import { View, Text, StyleProp, ViewStyle, SafeAreaView } from "react-native";
import styles from "./styles";

interface TikTokSafeAreaViewProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export default function TikTokSafeAreaView(props: TikTokSafeAreaViewProps) {
  const { children, style } = props;
  return (
    <SafeAreaView style={[styles.safeAreaViewContainer, style]}>
      {children}
    </SafeAreaView>
  );
}
