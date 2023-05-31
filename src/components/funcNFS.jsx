import React, { useState, useEffect} from "react";
import * as FileSystem from "expo-file-system"

import RNFS from 'react-native-fs'


export const EscribirEnArchivo = async (data) => {
  const path = RNFS.DocumentDirectoryPath + '/miarchivo.json';

  try {
    let existingData = [];
    if (await RNFS.exists(path)) {
      const content = await RNFS.readFile(path, 'utf8');
      existingData = JSON.parse(content);
    }

    const newData = [...existingData, ...data];
    await RNFS.writeFile(path, JSON.stringify(newData), 'utf8');
    console.log('Datos escritos en el archivo con éxito');
  } catch (error) {
    console.log('Error al escribir en el archivo:', error);
  }
};

export const LeerArchivo = async () => {
  const path = RNFS.DocumentDirectoryPath + '/miarchivo.txt';

  try {
    if (await RNFS.exists(path)) {
      const contenido = await RNFS.readFile(path, 'utf8');
      const datos = JSON.parse(contenido);
      return datos;
    } else {
      console.log('El archivo no existe');
      return [];
    }
  } catch (error) {
    console.log('Error al leer el archivo:', error);
    return [];
  }
};