import React, { useEffect, useState } from 'react'
import { View, ScrollView, Alert, Platform } from 'react-native'
import TikTokButton from '../../../components/TikTokButton'
import TikTokText from '../../../components/TiktokText'
import TikTokTextField from '../../../components/TikTokTextField'
import TikTokView from '../../../components/TikTokViewPage'
import { TikTokGrey, TikTokWhite } from '../../../_core/colors'
import styles from './styles'
import { Formik } from 'formik';
import { signUpFormSchema, signUpFormValues } from './signUpFormI'
import dayjs from 'dayjs'
import ConfirmUsername from './ConfirmUserName'
import { signUp } from '../../../api/auth/authAPI'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as Location from 'expo-location';
import TikTokSelect from '../../../components/TikTokSelect'
import constants from 'expo-constants';
import SimpleDatePicker from '../../../components/react-native-simple-datepicker'

export default function SignUp({ navigation }: NativeStackScreenProps<RootStackParamList>) {

    const initialValues: signUpFormValues = {
        email: '',
        password: '',
        birthdate: dayjs().format("MM/DD/YYYY"),
        firstname: '',
        lastname: '',
        repeatPassword: '',
        tiktokAccount: '',
        province: '',
        bio: '',
        gender: ''
    };
    const [location, setLocation] = useState<Location.LocationObject | null>(null)
    const [username, setUsername] = useState("");
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false)
    const [form, setForm] = useState<signUpFormValues>();



    async function confimAccount(values: signUpFormValues) {
        setUsername(values.tiktokAccount)
        setForm(values)
        setOpenConfirmationModal(true)
    }
    useEffect(() => {
        getLocation()
    }, [])

    async function getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert("Mensaje", "La ubicación es necesaria para poder registrarte.")
            throw new Error("Location is required")
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        return location;
    }


    async function requestSignUp() {
        if (!form) return;
        let currentLocation = location;
        if (!currentLocation) {
            currentLocation = await getLocation()

        }
        const { repeatPassword, ...values } = form

        await signUp({
            ...values,
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
        }).then(res => {

            Alert.alert("Mensaje Exitoso", "Te has registrado correctamente",
                [
                    { text: 'OK', onPress: () => { setOpenConfirmationModal(false); navigation.goBack() } }
                ]
            )
        })
            .catch(err => {
                console.log(err.response.data)
                if (err?.response?.status === 409) {
                    Alert.alert("Mensaje Error", `El correo "${form.email}" ya exite.`)
                    setOpenConfirmationModal(false)
                } else {
                    Alert.alert("Mensaje Error", "Error, por favor intente más tarde.")
                }
            })
    }

    return (
        <ScrollView contentContainerStyle={{ paddingTop: constants.statusBarHeight, paddingBottom: 40, backgroundColor: TikTokWhite }}>
            <TikTokView style={styles.loginContainer}>
                <View style={styles.formContainer}>
                    <View style={styles.headerTextContainer}>
                        <View>
                            <TikTokText style={styles.headerText}>Crea una nueva cuenta</TikTokText>
                        </View>


                    </View>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={signUpFormSchema}
                        onSubmit={values => confimAccount(values)}
                    >
                        {({ handleChange, handleSubmit, values, errors, touched }) => (
                            <>
                                <View style={styles.formInputContainer}>
                                    <TikTokTextField valid={!(errors.firstname && touched.firstname)}
                                        error={errors.firstname}
                                        value={values.firstname}
                                        autoCapitalize="none"
                                        placeholder="Nombre"
                                        containerStyle={styles.inputStyle}
                                        onChangeText={handleChange('firstname')}
                                        placeholderTextColor={TikTokGrey} />

                                    <TikTokTextField valid={!(errors.lastname && touched.lastname)}
                                        error={errors.lastname}
                                        value={values.lastname}
                                        autoCapitalize="none"
                                        placeholder="Apellido"
                                        containerStyle={styles.inputStyle}
                                        onChangeText={handleChange('lastname')}
                                        placeholderTextColor={TikTokGrey} />

                                    <SimpleDatePicker
                                        date={values.birthdate}
                                        label="Fecha de nacimiento:"
                                        onChange={handleChange('birthdate')}
                                    />


                                    <TikTokTextField
                                        valid={!(errors.tiktokAccount && touched.tiktokAccount)}
                                        error={errors.tiktokAccount}
                                        value={values.tiktokAccount}
                                        autoCapitalize="none"
                                        placeholder="Usuario de TikTok"
                                        containerStyle={styles.inputStyle}
                                        onChangeText={handleChange('tiktokAccount')}
                                        placeholderTextColor={TikTokGrey} />

                                    <TikTokTextField
                                        valid={!(errors.bio && touched.bio)}
                                        error={errors.bio}
                                        value={values.bio}
                                        autoCapitalize="none"
                                        placeholder="Biografía"
                                        containerStyle={styles.inputStyle}
                                        onChangeText={handleChange('bio')}
                                        placeholderTextColor={TikTokGrey} />

                                    <TikTokTextField
                                        valid={!(errors.province && touched.province)}
                                        error={errors.province}
                                        value={values.province}
                                        autoCapitalize="none"
                                        placeholder="Provincia"
                                        containerStyle={styles.inputStyle}
                                        onChangeText={handleChange('province')}
                                        placeholderTextColor={TikTokGrey} />


                                    <TikTokSelect
                                        items={
                                            [
                                                { label: 'Hombre', value: 'masculine' },
                                                { label: 'Mujer', value: 'femenine' },
                                            ]
                                        }
                                        value={values.gender}
                                        style={styles.inputStyle}
                                        onValueChange={handleChange('gender')}

                                        placeholder={{ value: null, label: "Sexo" }}
                                    />

                                    <TikTokTextField
                                        valid={!(errors.email && touched.email)}
                                        error={errors.email}
                                        value={values.email}
                                        autoCapitalize="none"
                                        placeholder="Correo Electrónico"
                                        containerStyle={styles.inputStyle}
                                        onChangeText={handleChange('email')}
                                        keyboardType="email-address"
                                        placeholderTextColor={TikTokGrey} />

                                    <TikTokTextField
                                        valid={!(errors.password && touched.password)}
                                        error={errors.password}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        placeholder="Contraseña"
                                        keyboardType="visible-password"
                                        secureTextEntry={true}
                                        containerStyle={styles.inputStyle}
                                        placeholderTextColor={TikTokGrey} />

                                    <TikTokTextField
                                        valid={!(errors.repeatPassword && touched.repeatPassword)}
                                        error={errors.repeatPassword}
                                        value={values.repeatPassword}
                                        onChangeText={handleChange('repeatPassword')}
                                        placeholder="Repetir Contraseña"
                                        keyboardType="visible-password"
                                        secureTextEntry={true}
                                        placeholderTextColor={TikTokGrey} />

                                </View>
                                <View>
                                    <TikTokButton
                                        onPress={handleSubmit}
                                        style={{ width: '100%' }}>
                                        Registrarme
                                    </TikTokButton>
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
            </TikTokView>
            <ConfirmUsername
                open={openConfirmationModal}
                onConfirmation={() => requestSignUp()}
                username={username}
                onCancel={() => setOpenConfirmationModal(false)}
            />
        </ScrollView>
    )
}