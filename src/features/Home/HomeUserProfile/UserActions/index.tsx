import React from "react";
import { View, Text, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { User } from "../../../../api/auth/types/auth";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import TikTokIconButton from "../../../../components/TikTokIconButton";
import { TikTokWhite } from "../../../../_core/colors";
import { sendLikeRequest } from "../../matchUserSlice";
import styles from "./styles";

interface UserActionsProps { 
  user:User
}

export default function UserActions({user}: UserActionsProps) {
  const dispatch = useAppDispatch();
  const {  totalPoints } = useAppSelector(state => state.matchUser);
  const userAuth = useAppSelector(state => state.auth.user);
  const currentUser = user;


  function action(type: 'like' | 'dislike') {
    const images = userAuth?.images ? userAuth.images[0] : null;
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
