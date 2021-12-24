import {StyleSheet} from 'react-native'
import { TikTokGreyF5F5, TikTokWhite } from '../../_core/colors'
import { h3Size, Marginpage } from '../../_core/styles'

export default StyleSheet.create({
    ProfileContainer:{
        backgroundColor:TikTokGreyF5F5,
        margin:Marginpage,
        alignItems:'center'
    },
    profileNameContainer:{
        marginTop:30,
        alignItems:'center'
    },
    profileNameText:{
        fontWeight:'bold',
        fontSize:h3Size
    },
    imageFooterContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    imageFooterFlag:{
        width:20,
        height:15
    },
    imageHeaderText:{
        // fontSize:,
        marginLeft:10,
    },
    bio:{
        marginTop:30
    }
})