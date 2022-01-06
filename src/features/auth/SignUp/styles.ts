import {StyleSheet} from 'react-native'
import { TikTokGrey, TikTokLightGrey } from '../../../_core/colors'

export default StyleSheet.create({
    formContainer:{
        width:'80%',
        justifyContent:'space-between'
    },
    loginContainer:{
     justifyContent:'center',
     alignItems:'center',
    
    },
    inputStyle:{
        marginBottom:20
    },
    headerTextContainer:{
        marginBottom:20
    },
    headerText:{
        fontSize:28,
        fontWeight:'bold',

        marginBottom:10
    },
    infoTextContainer:{
        flexDirection:'row'
    },
    infoText:{
        color:TikTokGrey
    },
    infoActionText:{
        fontWeight:'bold'
    },
    formInputContainer:{
        marginBottom:50
    },
    forgotPasswordContainer:{
        marginTop:20
    }
})