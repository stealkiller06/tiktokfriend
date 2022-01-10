import React, { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Match } from '../../api/match/types/like'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { sendGetMatchListRequest } from '../Home/matchUserSlice'
import NotificationItem from './NotificationItem'

interface NotificationsProps { }

export default function Notifications(props: NotificationsProps) {

    const dispatch = useAppDispatch()
    const { matches } = useAppSelector(state => state.matchUser)

    console.log(matches)

    useEffect(() => {
        dispatch(sendGetMatchListRequest())
    }, [])

    const renderItem = ({ item }: { item: Match }) => {
        return (
            <NotificationItem match={item} />
        )
    }

    const keyExtractor = (item: Match) => item._id;

    return (
        <View>
            <FlatList
                data={matches}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />

        </View>
    )
}