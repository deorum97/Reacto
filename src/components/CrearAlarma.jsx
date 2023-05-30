import React ,{ useState} from 'react'
import { ScrollView , Text , TextInput , StyleSheet } from 'react-native'
import * as FileSystem from "expo-file-system"

const useEscribirEnArchivo = () => {

  const rutaArchivo = FileSystem.documentDirectory + 'miarchivo.js';

  const [alarms, setAlarms] = useState([]);

  const escribirEnArchivo = async () =>{

    const nueva = {id: 4,
            name: 'Alarma 1'};

    setAlarms([...alarms, nueva])

    try {
        await FileSystem.writeAsStringAsync(rutaArchivo, JSON.stringify(alarms));
        console.log('Archivo escrito con éxito');
    } catch (error) {
        console.log('Error al escribir en el archivo:', error);
    }
  };

  return escribirEnArchivo

};

export const CrearAlarma = () => {
    const escribirEnArchivo = useEscribirEnArchivo();

    return (
        <ScrollView>
            <Text> Nombre de la alarma</Text>

        </ScrollView>
    )

}

