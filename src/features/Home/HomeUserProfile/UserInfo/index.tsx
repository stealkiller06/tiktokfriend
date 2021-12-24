import React from "react";
import { View, Image } from "react-native";
import TikTokAvatar from "../../../../components/TikTokAvatar";
import TikTokIconButton from "../../../../components/TikTokIconButton";
import TikTokText from "../../../../components/TiktokText";
import { TikTokWhite } from "../../../../_core/colors";
import styles from "./styles";


interface UserInfoProps { }

export default function UserInfo(props: UserInfoProps) {


  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.userInfoImage}
        source={{
          uri: "https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg",
        }}
      />
      <View style={styles.imageOverlay} />

      <View style={styles.imageHeader}>
        <View style={styles.imageHeaderProfilePicture}>
          <TikTokAvatar
            source={{
              uri: "https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg",
            }}
          />
          <TikTokText style={styles.imageHeaderText}>Victoria Rufo</TikTokText>
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
    </View>
  );
}
