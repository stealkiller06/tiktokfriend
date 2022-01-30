import { View, Text, TouchableOpacity, Image, ViewStyle } from 'react-native'
import * as Linking from 'expo-linking'
import PayPalIcon from '../../assets/images/paypal-icon.png'

interface TikTokDonationButtonProps {

    style?: ViewStyle
}

export default function TikTokDonationButton(props: TikTokDonationButtonProps) {
    const { style } = props;

    return (
        <TouchableOpacity
            style={[{
                backgroundColor: '#feb749',
                padding: 10,
                paddingHorizontal: 30,
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center'
            }, style]}
            onPress={() => Linking.openURL("https://paypal.me/stealkiller06?country.x=DO&locale.x=es_XC")}
        >

            <Text
                style={{
                    fontWeight: 'bold',
                    marginBottom: 5,
                    fontSize: 16
                }}
            >Aportar al proyecto
            </Text>

            <Image

                source={PayPalIcon}
                style={{
                    width: 100,
                    height: 20,

                    resizeMode: 'contain'
                }}
            />
        </TouchableOpacity>
    )
}