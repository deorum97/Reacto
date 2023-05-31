import React, { useEffect, useState , useContext } from "react";
import { View, StyleSheet, Text ,TouchableNativeFeedback, Alert} from "react-native";
import theme from "../theme";
import {LinearGradient} from "expo-linear-gradient";
import {useEscribirEnArchivo, useLeerArchivo } from "./func";

import { GlobalContext } from './GlobalState';

const Boton = ()=>{

    // const escribirEnArchivo = useEscribirEnArchivo();

    const { globalState, setGlobalState } = useContext(GlobalContext);

    // Acceder y actualizar el estado global
    const updateGlobalState = () => {
        setGlobalState(true);
    };

    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={['transparent',theme.backgroundColors.second]}
                style={styles.linearGradient}
                locations={[0.1,0.4]}
            >
                <TouchableNativeFeedback onPress={updateGlobalState}>
                    <View style={styles.boton}>
                        
                        <View style={styles.vertical}/>
                        <View style={styles.horizontal}/>
                    </View>
                </TouchableNativeFeedback>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create ({
     linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
    },

    container:{
        position: theme.boton.position,
        bottom: 0,
        zIndex: 2,
        width: '100%',
    },

    boton: {
        width: theme.boton.width,
        height: theme.boton.height,
        borderRadius: theme.boton.borderRadius,
        backgroundColor: theme.boton.backgroundC,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems:'center',
        marginBottom: theme.boton.marginBottom,
        marginTop: theme.boton.marginTop,
    },

    vertical:{
        height: theme.botonLine.height,
        width: theme.botonLine.width,
        backgroundColor: theme.botonLine.color,
        borderRadius: theme.botonLine.borderRadius,
        position: theme.botonLine.position,
    },

    horizontal:{
        height: theme.botonLine.height,
        width: theme.botonLine.width,
        backgroundColor: theme.botonLine.color,
        borderRadius: theme.botonLine.borderRadius,
        position: theme.boton.position,
        transform: [{rotate: '90deg'}]
    },
})

export default Boton