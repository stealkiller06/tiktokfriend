import {StyleSheet} from 'react-native'
import { TikTokPrimary, TikTokWhite } from '../../_core/colors'

export default StyleSheet.create({
    buttonTextStyle:{
        fontSize:16,
        textTransform:'uppercase'
    },
    buttonTextContained:{
        color:TikTokWhite
    },
    buttonTextOutlined:{
      
    },
    buttonStyle:{
        alignItems:'center',
        justifyContent:'center',
        width:'80%',
        paddingVertical:15,
        borderRadius:50
    },
    buttonContained:{
        backgroundColor:TikTokPrimary
    },
    buttonOutlined:{
        borderWidth:1,
        borderColor:TikTokPrimary
    }
})