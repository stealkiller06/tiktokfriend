import React from 'react'
import { View, Text, StyleProp, ViewStyle } from 'react-native'
import RNPickerSelect, { Item } from 'react-native-picker-select';
import { pickerSelectStyle } from './styles';
import { Ionicons } from '@expo/vector-icons';

interface TikTokSelectProps {
    items: Item[],
    onValueChange: (value: string, index: number) => void,
    style?: StyleProp<ViewStyle>,
    placeholder?: Item,
    value?: string
}

export default function TikTokSelect(props: TikTokSelectProps) {
    const { items, onValueChange, style, placeholder, value } = props
    return (
        <View style={style}>

            <RNPickerSelect
                style={{
                    ...pickerSelectStyle,
                    iconContainer: {
                        top: 10,
                        right: 12,
                    },
                }}
                useNativeAndroidPickerStyle={false}

                // textInputProps={{ underlineColorAndroid: 'yellow' }}
                Icon={() => {
                    return <Ionicons name="chevron-down-outline" size={24} color="gray" />;
                }}
                value={value}
                onValueChange={onValueChange}
                placeholder={placeholder}
                items={items}
            />
        </View>

    )
}