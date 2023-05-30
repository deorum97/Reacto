import React, { useState, useEffect} from "react";
import * as FileSystem from "expo-file-system"


export const useEscribirEnArchivo = () => {

  const rutaArchivo = FileSystem.documentDirectory + 'miarchivo.js';

  const [alarms, setAlarms] = useState([]);

  const escribirEnArchivo = async () =>{

    const nueva = {id: 4,
            name: 'Alarma 1'};

    setAlarms([...alarms, nueva])

    try {
        await FileSystem.writeAsStringAsync(rutaArchivo, JSON.stringify(alarms));
        console.log('Archivo escrito con éxito');
        console.log({rutaArchivo})
    } catch (error) {
        console.log('Error al escribir en el archivo:', error);
    }
  };
  return escribirEnArchivo
};

export const useLeerArchivo = () => {

  const rutaArchivo = FileSystem.documentDirectory + 'miarchivo.js';

  const [alarm, setAlarms] = useState([])

  useEffect(() => {
    const leerArchivo = async () => {
      try {
        const contenido = await FileSystem.readAsStringAsync(rutaArchivo);
        const contenidoJSON = JSON.parse(contenido);
        setAlarms(contenidoJSON);
        console.log(contenidoJSON)
      } catch (error) {
        console.log('Error al leer el archivo:', error);
      }
    }
  leerArchivo()

  }, [])

  return alarm
};

