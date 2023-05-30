import React, { useState } from 'react'
import { StyleSheet, Text, View , Modal, TouchableOpacity } from 'react-native'
import theme from '../theme.js'
import MainBody from './MainBody'
import Boton from './Boton.jsx'
import AlarmsList from './AlarmsList.jsx'



 const Main =() => {

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Boton />
            <AlarmsList />
            <Modal 
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={closeModal}
            >
                <TouchableOpacity 
                    style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    activeOpacity={1}
                    onPress={closeModal}
                >
                    
                </TouchableOpacity>
            </Modal>
            
        </View>
    )
 }

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.backgroundColors.second,
        flex: 1,
    }
});
 export default Main