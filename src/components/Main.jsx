import React from 'react'
import {StyleSheet, Text,View } from 'react-native'
import theme from '../theme.js'
import MainBody from './MainBody'
import Boton from './Boton.jsx'
import AlarmsList from './AlarmsList.jsx'

 const Main =() => {
    return (
        <View style={styles.container}>
            <Boton />
            <AlarmsList />
            
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