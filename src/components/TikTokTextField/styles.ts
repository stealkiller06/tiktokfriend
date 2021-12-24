import {StyleSheet} from 'react-native'
import { TikTokGrey, TikTokGreyF5F5, TikTokLightGrey, TikTokRed } from '../../_core/colors'

export default StyleSheet.create({
  inputContainer:{
    marginBottom:10,
   
  },
    input: {
        height: 50,
        padding: 10,
        backgroundColor:TikTokGreyF5F5,
        borderRadius:5
      },
      errorInput:{
        borderColor:TikTokRed,
        borderWidth:1
      },

      textError:{
        color:TikTokRed,
        marginTop:5
      }
})