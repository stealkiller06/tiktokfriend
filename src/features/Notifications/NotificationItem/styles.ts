import {StyleSheet} from 'react-native'
import { TikTokGrey, TikTokLightGrey, TikTokWhite } from '../../../_core/colors'

export default StyleSheet.create({
    notificationItemContainer:{
        backgroundColor:TikTokWhite,
        flexDirection:'row',
        padding:10,
        borderBottomWidth:1,
        borderColor:TikTokLightGrey
    },
    notificationInfoContainer:{
        marginLeft:20
    },
    notificationUserName:{
        fontWeight:"bold",
        fontSize:20
    },
    notificationUserMessage:{
        marginTop:10
    },
    notificationTime:{
        color:TikTokGrey,
        fontSize:13
    },
    notificationButtonContainer:{
        marginTop:10,
        flexDirection:'row',
    },
    notificationButtonStyle:{
        flex:1,
        margin:5,
        height:50
    }

})