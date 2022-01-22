import React from 'react'
import { View, Text } from 'react-native'
import { useAppSelector } from '../../app/hooks'
import RewardItem from './RewardItem'

interface RewardProps { }

export default function Reward(props: RewardProps) {
    const user = useAppSelector(state => state.auth.user)

    return (
        <View>
            <Text>Logros</Text>

            <RewardItem
                icon="gem"
                title="Entrar todos los días"
                userCanClaim={false}
                time={user?.reward?.claimDate}
                points={100}
            />
        </View>
    )
}