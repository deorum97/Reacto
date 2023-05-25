import React from "react";
import { View, StyleSheet, Text ,TouchableNativeFeedback, Alert} from "react-native";
import theme from "../theme";
import {LinearGradient} from "expo-linear-gradient";
import * as FileSystem from "expo-file-system"
import {escribirEnArchivo, leerArchivo} from "./func";
import control from "./func";

const Boton = ()=>{

//     const escribirEnArchivo = async () => {
//         const rutaArchivo = FileSystem.documentDirectory + 'miarchivo.js';
//         const contenido = 'Este es el contenido que se escribirá en el archivo2';

//         try {
//         await FileSystem.writeAsStringAsync(rutaArchivo, contenido);
//         console.log('Archivo escrito con éxito');
//         console.log({rutaArchivo})
//         } catch (error) {
//         console.log('Error al escribir en el archivo:', error);
//         }
//     };

//     const leerArchivo = async () => {
//     try {
//       const rutaArchivo = FileSystem.documentDirectory + 'miarchivo.js';
//       const contenido = await FileSystem.readAsStringAsync(rutaArchivo);
//       console.log('Contenido del archivo:', contenido);
//     } catch (error) {
//       console.log('Error al leer el archivo:', error);
//     }
//   };

    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={['transparent',theme.backgroundColors.second]} 
                style={styles.linearGradient}
                locations={[0.1,0.4]}
            >
                {/* <TouchableNativeFeedback onPress={() => Alert.alert(alarm.name)}> */}
                <TouchableNativeFeedback onPress={control.leerArchivo}>
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