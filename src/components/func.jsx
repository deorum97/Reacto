import React, { useState} from "react";
import * as FileSystem from "expo-file-system"


export const escribirEnArchivo = async () => {
  const rutaArchivo = FileSystem.documentDirectory + 'miarchivo.js';

  const [alarm, setAlarms] = useState([])

  setAlarms(alarms)

  try {
    await FileSystem.writeAsStringAsync(rutaArchivo, alarm);
    console.log('Archivo escrito con éxito');
    console.log({rutaArchivo})
  } catch (error) {
    console.log('Error al escribir en el archivo:', error);
  }
  
};

export const leerArchivo = async () => {
  try {
    const rutaArchivo = FileSystem.documentDirectory + 'miarchivo.js';
    const contenido = await FileSystem.readAsStringAsync(rutaArchivo);

    const [alarm, setAlarms] = useState([])

    
    console.log('Contenido del archivo:', contenido);
  } catch (error) {
    console.log('Error al leer el archivo:', error);
  }

  return(alarm)
};

