import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import UserActions from "./UserActions";
import UserInfo from "./UserInfo";

interface HomeUserProfileProps {}

export default function HomeUserProfile(props: HomeUserProfileProps) {
  return (
    <View style={styles.homeUserProfile}>
      <UserInfo />
      <UserActions />
    </View>
  );
}
