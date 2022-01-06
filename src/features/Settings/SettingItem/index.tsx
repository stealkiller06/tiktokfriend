import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

interface SettingItemProps {
    title: string,
    onPress: () => void,

}

export default function SettingItem(props: SettingItemProps) {
    const { onPress, title } = props;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.settingItemContainer}>
            <Text>{title}</Text>
            <FontAwesome name="angle-right" size={24} color="black" />
        </TouchableOpacity>
    )
}