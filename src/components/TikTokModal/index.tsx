import React, { ReactNode } from 'react'
import { View, Text, Modal } from 'react-native'
import TikTokSafeAreaView from '../TikTokSafeAreaView';
import styles from './styles'

interface TikTokModalProps {
    visible?: boolean,
    transparent?: boolean,
    animationType?: "slide" | "none" | "fade" | undefined,
    onRequestClose?: () => void,
    presentationStyle?: "fullScreen" | "pageSheet" | "formSheet" | "overFullScreen"
    children: ReactNode
}

export default function TikTokModal(props: TikTokModalProps) {

    const { children, animationType, onRequestClose, transparent, visible, presentationStyle = "fullScreen" } = props;
    return (
        <Modal
            animationType={animationType}
            transparent={transparent}
            presentationStyle={presentationStyle}
            visible={visible}
            onRequestClose={onRequestClose}>
            <TikTokSafeAreaView style={styles.centeredView}>
                {children}
            </TikTokSafeAreaView>
        </Modal>
    )
}