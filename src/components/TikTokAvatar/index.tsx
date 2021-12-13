import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
interface TikTokAvatarProps {
  source: ImageSourcePropType;
  onPress?: () => void;
}

export default function TikTokAvatar(props: TikTokAvatarProps) {
  const { source, onPress } = props;

  return (
    <TouchableOpacity style={styles.profileImageContainer} onPress={onPress}>
      <Image source={source} style={styles.profileImage} />
    </TouchableOpacity>
  );
}
