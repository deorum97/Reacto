import React, { useState, useEffect} from "react";
import * as FileSystem from "expo-file-system"
import Constants from 'expo-constants'


const getPersistentDataDirectory = async () => {
  const directory = await FileSystem.getDocumentDirectoryAsync();
  return directory;
};

export const useEscribirEnArchivo = () => {

  const [alarms, setAlarms] = useState([]);

  const escribirEnArchivo = async () =>{

    const dataDirectory = await getPersistentDataDirectory();
    const rutaArchivo = '${dataDirectory}/alarm.js';

    const contenido = await FileSystem.readAsStringAsync(rutaArchivo);
    const contenidoJSON = JSON.parse(contenido);
    setAlarms(contenidoJSON);
    console.log(contenidoJSON)

    const nueva = {id: contenidoJSON.length+1,
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

export const useLeerArchivo = () => {

  const [alarm, setAlarms] = useState([])

  useEffect(() => {
    const leerArchivo = async () => {

      const dataDirectory = await getPersistentDataDirectory();
      const rutaArchivo = '${dataDirectory}/alarm.js';

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

