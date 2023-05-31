import React ,{ useState , useContext , useMemo } from 'react'
import { ScrollView , Text , TextInput , StyleSheet, TouchableNativeFeedback } from 'react-native'
import theme from '../theme';
import { GlobalContext } from './GlobalState.jsx'
import RadioGroup from 'react-native-radio-buttons-group';

// const EscribirEnArchivo = async (data) => {
//   const path = RNFS.DocumentDirectoryPath + '/miarchivo.json';

//   try {
//     let existingData = [];
//     if (await RNFS.exists(path)) {
//       const content = await RNFS.readFile(path, 'utf8');
//       existingData = JSON.parse(content);
//     }

//     const newData = [...existingData, ...data];
//     await RNFS.writeFile(path, JSON.stringify(newData), 'utf8');
//     console.log('Datos escritos en el archivo con éxito');
//   } catch (error) {
//     console.log('Error al escribir en el archivo:', error);
//   }
// };

export const CrearAlarma = () => {

    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Hoy',
            value: 'option1',
            borderColor: '#fff',
            color: '#fff',
            size: 15,
            labelStyle:{
                color: "#fff",
                fontSize: 15
            }
        },
        {
            id: '2',
            label: 'Otro día',
            value: 'option2'
        }
    ]), []);

    const [selectedId, setSelectedId] = useState();

    const { globalState, setGlobalState } = useContext(GlobalContext);

    const closeModal = () => {
        setGlobalState(false)
    };

    const [alarm, setAlarm] =useState({
        name
    });

    const [name, setName] = useState('');
    
    const handleNombre = (event) =>{
        const [name , value] = event.target;
        setAlarm({
            ...alarm,
            [name]: value,
        })

    }

    return (
        <ScrollView style={styles.container}>
            <Text> Nombre de la alarma</Text>
            <TextInput 
                onChangeText={newName => setName(newName)}
                value={name}
                placeholder='nombre'
            />
            <RadioGroup 
                radioButtons={radioButtons} 
                onPress={setSelectedId}
                selectedId={selectedId}
                layout='row'
            />

            <TouchableNativeFeedback onPress={closeModal}>
                <Text>Cancelar</Text>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <Text>Crear</Text>
            </TouchableNativeFeedback>
        </ScrollView>
    )

}

 const styles = StyleSheet.create({

    container:{
        backgroundColor: theme.backgroundColors.fourth,
        width: '70%',
        height: '20%',
        flex: 1,
    }
 } )