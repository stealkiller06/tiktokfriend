import {Platform, StyleSheet} from 'react-native'
import { TikTokWhite } from '../../_core/colors'
import Constants from 'expo-constants'
export default StyleSheet.create({
    viewContainer:{
        flex:1,
        backgroundColor:TikTokWhite,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0

    }
})