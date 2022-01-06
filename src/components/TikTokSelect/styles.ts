import {StyleSheet} from 'react-native'
import { TikTokGrey, TikTokGreyF5F5 } from '../../_core/colors'

export default StyleSheet.create({})

export const pickerSelectStyle = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        backgroundColor:TikTokGreyF5F5,
        paddingRight: 30, // to ensure the text is never behind the icon
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 8,
        color: 'black',
        backgroundColor:TikTokGreyF5F5,
        paddingRight: 30, // to ensure the text is never behind the icon
      },
      placeholder:{
          color:TikTokGrey
      }
})
