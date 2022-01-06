import React, { useState } from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  ActivityIndicator,
} from "react-native";
import { TikTokWhite } from "../../_core/colors";
import TikTokText from "../TiktokText";
import styles from "./styles";

type ButtonMode = "outlined" | "contained";
interface TikTokButtonProps {
  mode?: ButtonMode;
  children: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  loading?: boolean;
  textStyle?: StyleProp<TextStyle>
}

export default function TikTokButton(props: TikTokButtonProps) {
  const { children, style, onPress, mode = "contained", textStyle, loading } = props;
  return (
    <TouchableOpacity
      onPress={!loading ? onPress : () => { }}
      style={[
        styles.buttonStyle,
        mode === "contained" ? styles.buttonContained : styles.buttonOutlined,
        style,
      ]}
    >
      {loading ?
        <ActivityIndicator size="small" color={TikTokWhite} />
        :
        <TikTokText
          style={[
            styles.buttonTextStyle,
            mode === "contained"
              ? styles.buttonTextContained
              : styles.buttonTextOutlined,
            textStyle
          ]}
        >
          {children}
        </TikTokText>
      }

    </TouchableOpacity>
  );
}
