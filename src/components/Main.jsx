import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View , Modal, TouchableOpacity } from 'react-native'
import theme from '../theme.js'
import Boton from './Boton.jsx'
import AlarmsList from './AlarmsList.jsx'
import { CrearAlarma } from './CrearAlarma.jsx'
import { GlobalContext } from './GlobalState.jsx'


 const Main =() => {

    const { globalState, setGlobalState } = useContext(GlobalContext);

    const closeModal = () => {
        setGlobalState(false)
    };

    return (
        <View style={styles.container}>
            <Boton />
            <AlarmsList />
            <Modal 
                visible={globalState}
                transparent={true}
                animationType="fade"
                onRequestClose={closeModal}
            >
                    <CrearAlarma/>
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