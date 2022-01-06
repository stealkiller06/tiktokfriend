import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import TikTokAvatar from "../../../../components/TikTokAvatar";
import TikTokIconButton from "../../../../components/TikTokIconButton";
import TikTokText from "../../../../components/TiktokText";
import { TikTokWhite } from "../../../../_core/colors";
import { sendGetProfileListRequest } from "../../matchUserSlice";
import styles from "./styles";


interface UserInfoProps { }

export default function UserInfo(props: UserInfoProps) {

  const dispatch = useAppDispatch();
  const { profileList, location } = useAppSelector(state => state.matchUser)


  useEffect(() => {
    if (location) {
      dispatch(sendGetProfileListRequest(location.latitude, location.longitude))
    }
  }, [location])
  if (!profileList.length) return <View><TikTokText>There is not more tiktokers</TikTokText></View>
  const currentProfile = profileList[0];


  return (
    <View style={{ flex: 1 }}>
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
    </View>
  );
}
