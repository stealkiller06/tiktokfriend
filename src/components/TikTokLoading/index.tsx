import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { TikTokWhite } from '../../_core/colors'
import styles from './styles'

interface TikTokLoadingProps { }

export default function TikTokLoading(props: TikTokLoadingProps) {

    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={TikTokWhite} />
        </View>
    )
}