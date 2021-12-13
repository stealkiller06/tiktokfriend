import {StyleSheet} from 'react-native'
import { TikTokGrey, TikTokPrimary, TikTokWhite } from '../../../_core/colors'

export default StyleSheet.create({
    homeHeaderConctainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        // paddingHorizontal:20
    },
    userCoinsContainer:{
        backgroundColor:TikTokGrey,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        paddingHorizontal:10
    },
    userCoinText:{
        color:TikTokWhite,
        fontSize:16,
        fontWeight:'bold'
    },
    diamongContainer:{
        backgroundColor:TikTokGrey,
        margin:5,
         marginLeft:13,
        borderRadius:10
    },
    profileImageContainer:{

    },
    profileImage:{
        width:50,
        height:50
    }
})