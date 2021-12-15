import React from 'react'
import { View, Text } from 'react-native'
import NotificationItem from './NotificationItem'

interface NotificationsProps { }

export default function Notifications(props: NotificationsProps) {

    return (
        <View>
            <NotificationItem />
            <NotificationItem />

        </View>
    )
}