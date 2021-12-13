import React from "react";
import { View, Text, Image } from "react-native";
import profileImage from "../../../assets/images/avatar.jpeg";
import TikTokAvatar from "../../../components/TikTokAvatar";
import TikTokIconButton from "../../../components/TikTokIconButton";
import TikTokText from "../../../components/TiktokText";
import { TikTokWhite } from "../../../_core/colors";
import styles from "./styles";

interface HomeHeaderProps {}

export default function HomeHeader(props: HomeHeaderProps) {
  return (
    <View style={styles.homeHeaderConctainer}>
      <TikTokAvatar source={profileImage} />
      <View style={styles.userCoinsContainer}>
        <TikTokText style={styles.userCoinText}>0</TikTokText>

        <View style={styles.diamongContainer}>
          <TikTokIconButton name="diamond" color={TikTokWhite} />
        </View>
      </View>

      <TikTokIconButton name="bell" />
    </View>
  );
}
