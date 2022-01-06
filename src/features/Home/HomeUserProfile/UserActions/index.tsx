import React from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import TikTokIconButton from "../../../../components/TikTokIconButton";
import { TikTokWhite } from "../../../../_core/colors";
import { sendLikeRequest } from "../../matchUserSlice";
import styles from "./styles";

interface UserActionsProps { }

export default function UserActions(props: UserActionsProps) {
  const dispatch = useAppDispatch();
  const { profileList } = useAppSelector(state => state.matchUser);
  const currentUser = profileList[0];


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
        onPress={() => dispatch(sendLikeRequest(currentUser._id, "dislike"))}
        name="times"
      />
      <TikTokIconButton
        color={TikTokWhite}
        style={styles.heartButton}
        size={40}
        onPress={() => dispatch(sendLikeRequest(currentUser._id, "like"))}
        name="heart"
      />
    </View>
  );
}
