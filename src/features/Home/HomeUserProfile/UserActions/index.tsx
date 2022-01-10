import React from "react";
import { View, Text, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import TikTokIconButton from "../../../../components/TikTokIconButton";
import { TikTokWhite } from "../../../../_core/colors";
import { sendLikeRequest } from "../../matchUserSlice";
import styles from "./styles";

interface UserActionsProps { }

export default function UserActions(props: UserActionsProps) {
  const dispatch = useAppDispatch();
  const { profileList, totalPoints } = useAppSelector(state => state.matchUser);
  const user = useAppSelector(state => state.auth.user);
  const currentUser = profileList[0];


  function action(type: 'like' | 'dislike') {
    const images = user?.images ? user.images[0] : null;
    if (!images) {
      Alert.alert("Mensaje de error", "Debes agregar tu foto de perfil para poder hacer esta acción",
        [{ text: 'Ok' }]
      )
      return;
    }

    if (type == "like") {
      if (totalPoints < 10) {
        Alert.alert("Mensaje de error", "No tienes suficientes puntos")
        return;
      }
      dispatch(sendLikeRequest(currentUser._id, "like"))
    } else {
      dispatch(sendLikeRequest(currentUser._id, "dislike"))
    }
  }

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
        onPress={() => action('dislike')}
        name="times"
      />
      <TikTokIconButton
        color={TikTokWhite}
        style={styles.heartButton}
        size={40}
        onPress={() => action('like')}
        name="heart"
      />
    </View>
  );
}
