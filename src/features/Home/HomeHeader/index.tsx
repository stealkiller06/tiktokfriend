import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { useAppSelector } from "../../../app/hooks";
import TikTokAvatar from "../../../components/TikTokAvatar";
import TikTokIconButton from "../../../components/TikTokIconButton";
import TikTokText from "../../../components/TiktokText";
import { TikTokRed, TikTokWhite } from "../../../_core/colors";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';


interface HomeHeaderProps { }
type homeScreenProps = NativeStackNavigationProp<RootStackParamList>
export default function HomeHeader(props: HomeHeaderProps) {
  const navigation = useNavigation<homeScreenProps>()
  const user = useAppSelector(state => state.auth.user);
  const isMissingDetails = !user?.images?.length;


  return (
    <View style={styles.homeHeaderConctainer}>
      <View>
        <TikTokAvatar
          {...user?.images?.length ? { source: { uri: user.images[0].location } } : null}
          onPress={() => navigation.navigate('Profile')}
          style={isMissingDetails && styles.missingDetails} />
        {isMissingDetails && (
          <AntDesign name="exclamationcircle" size={18} color={TikTokRed} style={styles.missingIcon} />
        )}
      </View>
      <View style={styles.userCoinsContainer}>
        <TikTokText style={styles.userCoinText}>0</TikTokText>

        <View style={styles.diamongContainer}>
          <TikTokIconButton name="diamond" color={TikTokWhite} />
        </View>
      </View>

      <TikTokIconButton
        onPress={() => navigation.navigate("Notifications")}
        name="bell" />
    </View>
  );
}
