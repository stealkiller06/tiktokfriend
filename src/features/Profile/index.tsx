import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Image, View } from 'react-native'
import { useAppSelector } from '../../app/hooks'
import TikTokIconButton from '../../components/TikTokIconButton'
import TikTokText from '../../components/TiktokText'
import TikTokView from '../../components/TikTokViewPage'
import { TikTokPrimary } from '../../_core/colors'
import ProfilePhotoViewer from './ProfilePhotoViewer'
import styles from './styles'
import dayjs from 'dayjs'
import TikTokDonationButton from '../../components/TikToKDonationButton'
import TikTokSafeAreaView from '../../components/TikTokSafeAreaView'
interface ProfileProps { }
type profileScreenProps = NativeStackScreenProps<RootStackParamList>

export default function Profile({ navigation }: profileScreenProps) {
  const user = useAppSelector(state => state.auth.user);
  function getAge() {
    const date1 = dayjs(new Date(user?.birthdate || ""));
    const date2 = dayjs(new Date());
    const diff = date2.diff(date1, 'years')
    return diff
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TikTokIconButton
          onPress={() => navigation.navigate('Setting')}
          name="gear"
          color={TikTokPrimary}
        />
      ),
    });
  }, [navigation]);

  return (
    <TikTokSafeAreaView style={styles.ProfileContainer}>
      <ProfilePhotoViewer />

      <View style={styles.profileNameContainer}>
        <TikTokText style={styles.profileNameText}>{user?.firstname + " " + user?.lastname}</TikTokText>
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

      <View style={styles.bio}>
        <TikTokText>{getAge()} Años</TikTokText>
      </View>

      <View style={styles.bio}>
        <TikTokText>{user?.bio}</TikTokText>
      </View>

      <TikTokDonationButton style={{ marginTop: 50 }} />
    </TikTokSafeAreaView>
  )
}