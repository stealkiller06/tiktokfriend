import React, { ReactNode } from 'react'
import { View, Text, StyleProp, ViewStyle } from 'react-native'
import styles from './styles'

interface TikTokViewProps {
    style?: StyleProp<ViewStyle>,
    children?: ReactNode
}

export default function TikTokView(props: TikTokViewProps) {
    const { style, children } = props
    return (
        <View style={[styles.viewContainer, style]}>
            {children}
        </View>
    )
}