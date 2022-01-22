import React from 'react'
import { View, Text, Image } from 'react-native'
import { Match } from '../../../api/match/types/like'
import { useAppSelector } from '../../../app/hooks'
import avatar from '../../../assets/images/noimage.jpg'
import TikTokAvatar from '../../../components/TikTokAvatar'
import TikTokButton from '../../../components/TikTokButton'
import TikTokText from '../../../components/TiktokText'
import dayjs from 'dayjs'
import styles from './styles'
import relativetime from 'dayjs/plugin/relativeTime'
import * as Linking from 'expo-linking';

// var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativetime)


interface NotificationItemProps {
    match: Match
}


export default function NotificationItem(props: NotificationItemProps) {
    const user = useAppSelector(state => state.auth.user);
    const { match } = props;

    const userLiked = match.from._id === user?._id ? match.to : match.from;
    function goToUserProfile() {
        Linking.openURL(`https://www.tiktok.com/@${userLiked.tiktokAccount}`)
    }

    return (
        <View style={styles.notificationItemContainer}>
            {userLiked.images && userLiked?.images[0] ?
                <TikTokAvatar source={{ uri: userLiked.images[0].location }} />
                :
                <TikTokAvatar source={avatar} />
            }
            <View style={styles.notificationInfoContainer}>
                <TikTokText style={styles.notificationUserName}>{userLiked.firstname} {userLiked.lastname}</TikTokText>
                <TikTokText style={styles.notificationUserMessage}> Hola, vamos a seguirnos en tiktok para colaborar o apoyarnos!</TikTokText>
                <TikTokText style={styles.notificationTime}> {dayjs(new Date(match.createdAt)).fromNow()} </TikTokText>
                <View style={styles.notificationButtonContainer}>
                    <TikTokButton mode="outlined" style={styles.notificationButtonStyle}>Cancelar</TikTokButton>
                    <TikTokButton style={styles.notificationButtonStyle}
                        onPress={() => goToUserProfile()}
                    >Agregar</TikTokButton>
                </View>
            </View>
        </View>
    )
}