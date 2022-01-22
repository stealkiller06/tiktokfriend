import React from 'react'
import { View, Text, Alert } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import TikTokButton from '../../../components/TikTokButton';
import { useAppDispatch } from '../../../app/hooks';
import { sendClaimLoginRewardRequest } from '../../Home/matchUserSlice';
import { User } from '../../../api/auth/types/auth';
import { setUser } from '../../auth/authSlice';

dayjs.extend(relativeTime)

interface RewardItemProps {
    points: number,
    title: string,
    icon: string,
    time: string,
    userCanClaim: boolean

}

export default function RewardItem(props: RewardItemProps) {
    const { icon, points, title, userCanClaim, time } = props;
    const timeHasPassed = dayjs(new Date()).isBefore(dayjs(new Date(time)))
    const dispatch = useAppDispatch();

    function updateUser(user: User) {
        dispatch(setUser(user))
    }
    async function claimLoginReward() {
        dispatch(sendClaimLoginRewardRequest((user, err) => {
            if (user) {
                updateUser(user)
            }
            if (err) {
                Alert.alert("Mensaje de error", "Ups. Ha ocurrido un error, intenta más tarde")
            }
        }))
    }
    return (
        <View style={styles.rewardContainer}>
            <View style={styles.contentContainer}>
                <View style={styles.diamondContainer}>
                    <FontAwesome5 style={styles.diamond} name={icon} size={40} color="black" />
                </View>
                <Text style={styles.title}>Reto: {title}</Text>
                {!timeHasPassed && !userCanClaim ?
                    <TikTokButton
                        onPress={() => claimLoginReward()}
                    >Reclamar premio ({points})</TikTokButton>
                    :
                    <Text> {dayjs().to(time, true)}</Text>
                }
            </View>
            {/* <View style={styles.rewardFooter}>
                <Text>{points}</Text>
                <FontAwesome5 style={styles.diamondText} name="gem" size={24} color="black" />
            </View> */}
        </View>
    )
}