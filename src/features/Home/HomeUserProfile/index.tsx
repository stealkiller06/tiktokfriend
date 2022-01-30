import React from "react";
import { View } from "react-native";
import Animated, { Layout } from "react-native-reanimated";
import { User } from "../../../api/auth/types/auth";
import styles from "./styles";
import UserActions from "./UserActions";
import UserInfo from "./UserInfo";

interface HomeUserProfileProps {
  user: User,
  index: number
}

export default function HomeUserProfile({ user, index }: HomeUserProfileProps) {

  return (
    <Animated.View
      layout={Layout.springify().duration(300)}
      style={[styles.homeUserProfile, { marginTop: index == 0 ? 10 : 40 }]}>
      <UserInfo user={user} />
      <UserActions user={user} />
    </Animated.View>
  );
}
