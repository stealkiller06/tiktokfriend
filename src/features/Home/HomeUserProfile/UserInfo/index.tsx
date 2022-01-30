import React from "react";
import { View, Image } from "react-native";
import { User } from "../../../../api/auth/types/auth";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import TikTokAvatar from "../../../../components/TikTokAvatar";
import TikTokIconButton from "../../../../components/TikTokIconButton";
import TikTokText from "../../../../components/TiktokText";
import { TikTokWhite } from "../../../../_core/colors";
import Animated, { SlideOutRight, ZoomOutRight } from 'react-native-reanimated'
import styles from "./styles";


interface UserInfoProps {
  user: User
}

export default function UserInfo(props: UserInfoProps) {
  const { user } = props;
  const currentProfile = user


  return (
    <Animated.View
      exiting={SlideOutRight}
      style={{ flex: 1 }}>
      <Image
        style={styles.userInfoImage}
        source={{
          uri: currentProfile?.images[0]?.location || "",
        }}
      />
      <View style={styles.imageOverlay} />

      <View style={styles.imageHeader}>
        <View style={styles.imageHeaderProfilePicture}>
          <TikTokAvatar
            source={{
              uri: currentProfile?.images[0]?.location || "",
            }}
          />
          <TikTokText style={styles.imageHeaderText}>{currentProfile.firstname} {currentProfile.lastname}</TikTokText>
        </View>

        <TikTokIconButton name="flag" color={TikTokWhite} />
      </View>

      <View style={styles.imageFooterContainer}>
        <Image
          style={styles.imageFooterFlag}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1200px-Flag_of_the_Dominican_Republic.svg.png",
          }}
        />
        <TikTokText style={styles.imageHeaderText}>
          República Dominicana
        </TikTokText>
      </View>
    </Animated.View>
  );
}
