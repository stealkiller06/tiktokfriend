import React from 'react'
import { View, Text, Image } from 'react-native'
import avatar from '../../../assets/images/avatar.jpeg'
import TikTokAvatar from '../../../components/TikTokAvatar'
import TikTokButton from '../../../components/TikTokButton'
import TikTokText from '../../../components/TiktokText'
import styles from './styles'

interface NotificationItemProps { }

export default function NotificationItem(props: NotificationItemProps) {

    return (
        <View style={styles.notificationItemContainer}>
            <TikTokAvatar source={avatar} />
            <View style={styles.notificationInfoContainer}>
                <TikTokText style={styles.notificationUserName}>Frank Pena</TikTokText>
                <TikTokText style={styles.notificationUserMessage}>Hola, vamos a seguirnos en tiktok para colaborar o apoyarnos!</TikTokText>
                <TikTokText style={styles.notificationTime}>Hace 8 horas</TikTokText>
                <View style={styles.notificationButtonContainer}>
                    <TikTokButton mode="outlined" style={styles.notificationButtonStyle}>Cancelar</TikTokButton>
                    <TikTokButton style={styles.notificationButtonStyle}>Agregar</TikTokButton>
                </View>
            </View>
        </View>
    )
}