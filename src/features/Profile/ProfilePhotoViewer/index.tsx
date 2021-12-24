import React from 'react'
import { View, Platform } from 'react-native'
import TikTokAvatar from '../../../components/TikTokAvatar'
import TikTokButton from '../../../components/TikTokButton'
import styles from './styles'
import * as ImagePicker from 'expo-image-picker';
import { updateProfile } from '../../../api/user/userApi'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setUser } from '../../auth/authSlice'

interface ProfilePhotoViewerProps { }

export default function ProfilePhotoViewer(props: ProfilePhotoViewerProps) {

    const userToken = useAppSelector(state => state.auth.userToken);
    const user = useAppSelector(state => state.auth.user);
    const dispatch = useAppDispatch();

    async function updateImageProfile() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.7,
        });

        if (result.cancelled) return;

        let localUri = result.uri;
        let filename = localUri.split('/').pop();

        // Infer the type of the image
        let match = /\.(\w+)$/.exec(filename || "");
        let type = match ? `image/${match[1]}` : `image`;

        // Upload the image using the fetch and FormData APIs
        let formData = new FormData();
        // Assume "photo" is the name of the form field the server expects
        formData.append('image', { uri: localUri || "", name: filename, type });

        await updateProfile(formData, userToken || "").then(res => {
            dispatch(setUser(res))
        }).catch(err => console.log(err))

    }
    return (
        <View style={styles.photoViewerContainer}>
            {user?.images?.length ?
                <TikTokAvatar source={{ uri: user.images[0].location }} size="large" />
                :
                <TikTokAvatar size="large" />

            }
            <TikTokButton onPress={() => updateImageProfile()}>Upload File</TikTokButton>
        </View>
    )
}