import React, { useState } from 'react'
import { View, TouchableOpacity, Alert } from 'react-native'
import TikTokButton from '../../../components/TikTokButton'
import TikTokText from '../../../components/TiktokText'
import TikTokTextField from '../../../components/TikTokTextField'
import TikTokView from '../../../components/TikTokViewPage'
import { TikTokGrey } from '../../../_core/colors'
import styles from './styles'
import { Formik } from 'formik';
import { loginFormSchema, loginFormValues } from './loginFormI'
import { sendLoginRequest } from '../authSlice'
import { useAppDispatch } from '../../../app/hooks'

interface LoginProps { }

export default function Login(props: LoginProps) {
    const initialValues: loginFormValues = { email: '', password: '' };
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false)

    async function login(values: loginFormValues) {
        setLoading(true)
        dispatch(sendLoginRequest(values.email, values.password, (err) => {
            setLoading(false)
            if (err) {
                Alert.alert("Error Inicio Sesión", "Usuario o Constraseña incorrectos",
                    [
                        { text: "Ok", onPress: () => { } }
                    ]
                )
            }
        }))

    }

    return (
        <TikTokView style={styles.loginContainer}>
            <View style={styles.formContainer}>
                <View style={styles.headerTextContainer}>
                    <View>
                        <TikTokText style={styles.headerText}>Hey, </TikTokText>
                        <TikTokText style={styles.headerText}>Inicia Sesión Ahora</TikTokText>
                    </View>

                    <View style={styles.infoTextContainer} >
                        <TikTokText style={styles.infoText}>Si eres nuevo / </TikTokText>
                        <TouchableOpacity><TikTokText style={styles.infoActionText}>Crear cuenta</TikTokText></TouchableOpacity>
                    </View>
                </View>
                <Formik
                    initialValues={initialValues}
                    validationSchema={loginFormSchema}
                    onSubmit={values => login(values)}
                >
                    {({ handleChange, handleSubmit, values, errors, touched }) => (
                        <>
                            <View style={styles.formInputContainer}>
                                <TikTokTextField valid={!(errors.email && touched.email)}
                                    error={errors.email}
                                    value={values.email}
                                    autoCapitalize="none"
                                    placeholder="Correo Electrónico"
                                    containerStyle={{ marginBottom: 30 }}
                                    onChangeText={handleChange('email')}
                                    keyboardType="email-address"
                                    placeholderTextColor={TikTokGrey} />

                                <TikTokTextField
                                    valid={!(errors.password && touched.password)}
                                    error={errors.password}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    placeholderTextColor={TikTokGrey} />
                                <View style={[styles.infoTextContainer, styles.forgotPasswordContainer]} >
                                    <TikTokText style={styles.infoText}>Olvidaste la contraseña? / </TikTokText>
                                    <TouchableOpacity><TikTokText style={styles.infoActionText}>Resetearla</TikTokText></TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <TikTokButton
                                    loading={loading}
                                    onPress={handleSubmit}
                                    style={{ width: '100%' }}>
                                    Iniciar Sesión
                                </TikTokButton>
                            </View>
                        </>
                    )}
                </Formik>
            </View>
        </TikTokView>
    )
}