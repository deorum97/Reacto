import React from "react";
import * as FileSystem from "expo-file-system"


const control =() =>{
const escribirEnArchivo = async () => {
        const rutaArchivo = FileSystem.documentDirectory + 'miarchivo.js';
        const contenido = 'Este es el contenido que se escribirá en el archivo2';

        try {
        await FileSystem.writeAsStringAsync(rutaArchivo, contenido);
        console.log('Archivo escrito con éxito');
        console.log({rutaArchivo})
        } catch (error) {
        console.log('Error al escribir en el archivo:', error);
        }
    };

    const leerArchivo = async () => {
    try {
      const rutaArchivo = FileSystem.documentDirectory + 'miarchivo.js';
      const contenido = await FileSystem.readAsStringAsync(rutaArchivo);
      console.log('Contenido del archivo:', contenido);
    } catch (error) {
      console.log('Error al leer el archivo:', error);
    }
  };
}
export default control