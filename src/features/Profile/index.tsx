import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Image, View } from 'react-native'
import { useAppSelector } from '../../app/hooks'
import TikTokIconButton from '../../components/TikTokIconButton'
import TikTokText from '../../components/TiktokText'
import TikTokView from '../../components/TikTokViewPage'
import { TikTokGreyF5F5, TikTokPrimary } from '../../_core/colors'
import ProfilePhotoViewer from './ProfilePhotoViewer'
import styles from './styles'

interface ProfileProps{}
type profileScreenProps = NativeStackScreenProps<RootStackParamList>

export default function Profile({navigation}:profileScreenProps){
const user = useAppSelector(state=>state.auth.user);

React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TikTokIconButton
        onPress={() => alert('This is a button!')}
        name="gear"
        color={TikTokPrimary}
      />
      ),
    });
  }, [navigation]);

return(
<TikTokView style={styles.ProfileContainer}>
    <ProfilePhotoViewer/>

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
        <TikTokText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut id dicta cumque est? Inventore assumenda, consequatur rem nemo esse explicabo sapiente quidem a vitae deserunt nesciunt harum optio delectus libero.</TikTokText>
    </View>
</TikTokView>
)
}