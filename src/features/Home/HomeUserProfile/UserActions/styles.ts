import {StyleSheet} from 'react-native'
import { TikTokGreen, TikTokGrey, TikTokPrimary, TikTokRed } from '../../../../_core/colors'

export default StyleSheet.create({
    userActionContainer:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:10,
        marginBottom:10
    },
    heartButton:{
        backgroundColor:TikTokGreen,
        borderRadius:100,
        paddingVertical:10,
        paddingHorizontal:10,
        marginHorizontal:10,
       
    },
    cancelButton:{
        backgroundColor:TikTokRed,
        borderRadius:100,
        paddingVertical:10,
        paddingHorizontal:15,
        marginHorizontal:10,
       
    },
    backButton:{
        backgroundColor:TikTokGrey,
        borderRadius:100,
        paddingVertical:10,
        paddingHorizontal:15,
        marginHorizontal:10, 
    }
})