import React, { ReactNode } from "react";
import { StyleProp, Text, TextStyle } from "react-native";

interface TikTokTextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export default function TikTokText(props: TikTokTextProps) {
  const { children, style } = props;

  return <Text style={style}>{children}</Text>;
}
