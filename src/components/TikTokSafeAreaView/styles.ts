import {Platform, StyleSheet} from 'react-native'
import { TikTokWhite } from '../../_core/colors'
import  Constants  from 'expo-constants'
export default StyleSheet.create({
    safeAreaViewContainer:{
        flex:1,
        margin:10,
        backgroundColor:TikTokWhite,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight+20 : 0

    }
})