import React, { useState } from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import TikTokText from "../TiktokText";
import styles from "./styles";

type ButtonMode = "outlined" | "contained";
interface TikTokButtonProps {
  mode?: ButtonMode;
  children: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export default function TikTokButton(props: TikTokButtonProps) {
  const { children, style, onPress, mode = "contained" } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonStyle,
        mode === "contained" ? styles.buttonContained : styles.buttonOutlined,
        style,
      ]}
    >
      <TikTokText
        style={[
          styles.buttonTextStyle,
          mode === "contained"
            ? styles.buttonTextContained
            : styles.buttonTextOutlined,
        ]}
      >
        {children}
      </TikTokText>
    </TouchableOpacity>
  );
}
