import React from 'react'
import { View } from 'react-native'
import SettingItem from './SettingItem'
import * as SecureStore from 'expo-secure-store';
import { useAppDispatch } from '../../app/hooks';
import { logoutUser } from '../auth/authSlice';

interface SettingsProps { }

export default function Settings(props: SettingsProps) {
    const dispatch = useAppDispatch();
    async function logout() {
        await SecureStore.deleteItemAsync("userToken");
        dispatch(logoutUser())
    }

    return (
        <View>
            <SettingItem title="Logout" onPress={() => logout()} />
        </View>
    )
}