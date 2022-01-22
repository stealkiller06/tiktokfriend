import React from 'react'
import { View, Text, TextInput, TextInputProps, StyleProp, TextStyle, ViewStyle } from 'react-native'
import TikTokText from '../TiktokText';
import styles from './styles'
interface TikTokTextFieldProps extends TextInputProps {
    style?: StyleProp<TextStyle>,
    containerStyle?: StyleProp<ViewStyle>,
    error?: string,
    valid?: boolean
}

export default function TikTokTextField(props: TikTokTextFieldProps) {
    const { style, error, containerStyle, valid = true, ...inputProps } = props;

    return (
        <View style={containerStyle}>
            <TextInput
                style={[styles.input, !valid && error ? styles.errorInput : null, style]}
                {...inputProps}
          
            />

            {!!(error && !valid) && (
                <TikTokText style={styles.textError}>{error}</TikTokText>
            )}
        </View>
    )
}