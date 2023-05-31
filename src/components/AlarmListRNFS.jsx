import React, {useEffect} from "react";
import {StyleSheet, View, Text, TouchableNativeFeedback, Alert , ScrollView} from 'react-native'
import theme from '../theme'
import Constants from 'expo-constants';

const AlarmsList = () => {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const obtenerDatosArchivo = async () => {
        const path = RNFS.DocumentDirectoryPath + '/miarchivo.json';
        const archivoExiste = await RNFS.exists(path);

        if (archivoExiste) {
            try {
            const contenido = await RNFS.readFile(path, 'utf8');
            const contenidoJSON = JSON.parse(contenido);
            setDatos(contenidoJSON);
            console.log('Contenido del archivo:', contenidoJSON);
            } catch (error) {
            console.log('Error al leer el archivo:', error);
            }
        } else {
            console.log('El archivo no existe');
        }
        };

        obtenerDatosArchivo();
    }, []);


    if (datos.length === 0) {
        return (
             <View style={styles.empty}>
                <Text style={styles.emptyT}>¡NO TIENES NINGUNA ALARMA!</Text>
                <Text style={styles.emptyT}>¡CREA UNA ALARMA YA!</Text>
                <Text style={styles.emptyT}>||</Text>
                <Text style={styles.emptyT}>||</Text>
                <Text style={styles.emptyT}>\/</Text>
            </View>
        )
    }else{

    return (
        <ScrollView style={styles.alarmScroll}>
            <View style={{paddingBottom: 120}}>
            {datos.map(dato => (
                <TouchableNativeFeedback 
                    onPress={() => Alert.alert(dato.name)}
                    key={dato.id}
                >
                    <View style={styles.container}>
                        <Text style={styles.text}>{dato.name}</Text>   
                    </View>
                </TouchableNativeFeedback>
            ))}
            </View>
        </ScrollView>
    )
    }
}

const styles =StyleSheet.create ({
    alarmScroll:{
        marginTop: Constants.statusBarHeight
    },

    container: {
        backgroundColor: theme.backgroundColors.fifth,
        width: theme.alarms.width,
        height: theme.alarms.height,
        marginTop: theme.alarms.marginT,
        marginHorizontal: theme.alarms.marginH,
        borderRadius: theme.alarms.borderR,
        padding: theme.alarms.padding,
        paddingLeft: theme.alarms.paddingL,
        justifyContent: theme.alarms.justifyC,
    },

     text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.empty,
        fontWeight: theme.fontWeights.bold
    },

    empty: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Constants.statusBarHeight,
    },

    emptyT: {
        color: theme.colors.textSecundary,
        fontSize: theme.fontSizes.empty,
        fontWeight: theme.fontWeights.bold
    }
})

export default AlarmsList