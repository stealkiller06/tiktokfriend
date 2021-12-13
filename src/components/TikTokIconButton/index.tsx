import React, { ReactNode } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  OpaqueColorValue,
  StyleProp,
  ViewStyle,
} from "react-native";
import Icon, { FontAwesome } from "@expo/vector-icons";
import { TikTokGrey } from "../../_core/colors";

interface TikTokIconButtonProps {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  children?: ReactNode;
  color?: OpaqueColorValue | string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

export default function TikTokIconButton(props: TikTokIconButtonProps) {
  const { children, name, style, size = 24, color = TikTokGrey } = props;
  return (
    <TouchableOpacity style={style}>
      {name ? <FontAwesome name={name} size={size} color={color} /> : children}
    </TouchableOpacity>
  );
}
