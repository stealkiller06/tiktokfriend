import React from 'react'
import SettingItem from './SettingItem'
import * as SecureStore from 'expo-secure-store';
import { useAppDispatch } from '../../app/hooks';
import { logoutUser } from '../auth/authSlice';
import TikTokView from '../../components/TikTokViewPage';
import TikTokSafeAreaView from '../../components/TikTokSafeAreaView';

interface SettingsProps { }

export default function Settings(props: SettingsProps) {
    const dispatch = useAppDispatch();
    async function logout() {
        await SecureStore.deleteItemAsync("userToken");
        dispatch(logoutUser())
    }

    return (
        <TikTokSafeAreaView>
            <SettingItem title="Logout" onPress={() => logout()} />
        </TikTokSafeAreaView>
    )
}