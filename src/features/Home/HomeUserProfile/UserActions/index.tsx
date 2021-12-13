import React from "react";
import { View, Text } from "react-native";
import TikTokIconButton from "../../../../components/TikTokIconButton";
import { TikTokWhite } from "../../../../_core/colors";
import styles from "./styles";

interface UserActionsProps {}

export default function UserActions(props: UserActionsProps) {
  return (
    <View style={styles.userActionContainer}>
      <TikTokIconButton
        color={TikTokWhite}
        style={styles.backButton}
        size={40}
        name="history"
      />
      <TikTokIconButton
        color={TikTokWhite}
        style={styles.cancelButton}
        size={40}
        name="times"
      />
      <TikTokIconButton
        color={TikTokWhite}
        style={styles.heartButton}
        size={40}
        name="heart"
      />
    </View>
  );
}
