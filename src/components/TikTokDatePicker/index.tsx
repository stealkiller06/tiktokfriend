import React, { useState } from 'react'
import { View, Text ,Platform} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-simple-date'

interface TikTokDatePickerProps { }

export default function TikTokDatePicker(props: TikTokDatePickerProps) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}        </View>
    )
}