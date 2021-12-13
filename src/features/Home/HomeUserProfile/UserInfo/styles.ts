import {StyleSheet} from 'react-native'
import { TikTokWhite } from '../../../../_core/colors'

export default StyleSheet.create({
    userInfoContainer:{
        position:'relative'
    },
    userInfoImage:{
        flex:1,
        borderRadius:30,
        resizeMode:'cover'
    },
    imageOverlay:{
        position:'absolute',
        top:0,
        right:0,
        left:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,0.4)',
        borderRadius:30,
    },
    imageHeader:{
        position:'absolute',
        top:30,
        left:20,
        right:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        
    },
    imageHeaderProfilePicture:{
        flexDirection:'row',
        alignItems:'center'
    },
    imageHeaderText:{
        fontSize:18,
        color:TikTokWhite,
        marginLeft:10,
        fontWeight:'bold'
    },
    imageFooterContainer:{
        position:'absolute',
        bottom:30,
        left:20,
        right:20,
        flexDirection:'row',
        alignItems:'center'
    },
    imageFooterFlag:{
        width:40,
        height:30
    },
   
})