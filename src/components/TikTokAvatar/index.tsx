import React from "react";
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import styles from "./styles";
import NoImage from '../../assets/images/noimage.jpg'

interface TikTokAvatarProps {
  source?: ImageSourcePropType;
  onPress?: () => void;
  style?:StyleProp<ViewStyle>;
  size?:"small"|"large"
}

export default function TikTokAvatar(props: TikTokAvatarProps) {
  const { source, onPress,style,size="small" } = props;

  return (
    <TouchableOpacity style={[styles.profileImageContainer,style]} onPress={onPress}>
      <Image source={source||NoImage} style={[styles.profileImage,size==="large"&&styles.profileImageLarge]} />
    </TouchableOpacity>
  );
}
