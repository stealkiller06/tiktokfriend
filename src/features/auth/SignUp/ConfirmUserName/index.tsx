import React from 'react'
import { View, Text } from 'react-native'
import TikTokModal from '../../../../components/TikTokModal'
import { WebView } from 'react-native-webview';
import TikTokButton from '../../../../components/TikTokButton';
import styles from './styles';

interface ConfirmUsernameProps {
    open: boolean,
    onConfirmation: () => void,
    onCancel: () => void,
    username: string
}

export default function ConfirmUsername(props: ConfirmUsernameProps) {
    const { open, onConfirmation, onCancel, username } = props;
    return (
        <TikTokModal visible={open}>
            <WebView
                style={{ flex: 1 }}
                source={{ uri: `https://www.tiktok.com/@${username}` }}
            />
            <View style={styles.buttonContainer}>
                <TikTokButton
                    onPress={onConfirmation}
                >Esta es mi cuenta</TikTokButton>
                <TikTokButton
                    onPress={onCancel}
                    mode="outlined"
                    style={{ marginTop: 10 }}>Cambiar nombre de usuario</TikTokButton>
            </View>
        </TikTokModal>
    )
}