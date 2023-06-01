import React ,{ useState , useContext , useMemo } from 'react'
import { ScrollView , Text , TextInput , StyleSheet, TouchableNativeFeedback , View } from 'react-native'
import theme from '../theme';
import { GlobalContext } from './GlobalState.jsx'
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

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


    // zona de configuracion del DateTimePicker
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
        });
    };

    let fdate = date.getDate() +'/'+ (date.getMonth() + 1)+'/'+date.getFullYear()
    let ftime = date.getHours() +':'+date.getMinutes();

    const [ days , setDays] = useState(
        {
            lunes:true,
            martes:false,
            miercoles:false,
            jueves:false,
            viernes:false,
            sabado:false,
            domingo:false
        }
    )

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    //Fin de zona de configuracion del DateTimePicker

    // zona de configuracion de radioButtons

    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Hoy',
            value: 'option1',
            // borderColor: '#fff', //cambio de color del circulo exterior
            // color: '#fff', //cambio de color del circulo de marcado
            size: 18,
            selected: true,
            labelStyle:{ //parte para cambiar el estilo del texto
            //     color: "#fff",
                fontSize: 18,
                lineHeight:20
            }
        },
        {
            id: '2',
            label: 'Otro día',
            value: 'option2',
            size: 18,
            labelStyle:{
                fontSize:18,
                lineHeight:20
            }
        },
        {
            id: '3',
            label: 'Diario',
            value: 'option2',
            size: 18,
            labelStyle:{
                fontSize:18,
                lineHeight:20
            }
        }
    ]), []);

    const [selectedId, setSelectedId] = useState(1);
    

    //Fin de zona de configuracion de radioButtons

    const { globalState, setGlobalState } = useContext(GlobalContext);

    const closeModal = () => {
        setGlobalState(false)
    };

    //comeinzo de intentos pro escribir 

    const crearAlarma = () => {

        setGlobalState(false)
    }

    const [alarm, setAlarm] =useState({
        name
    });

    const [name, setName] = useState('');
    
    // const handleNombre = (event) =>{
    //     const [name , value] = event.target;
    //     setAlarm({
    //         ...alarm,
    //         [name]: value,
    //     })

    // }

    return (
        <ScrollView style={styles.container}>
            <Text> Nombre de la alarma</Text>
            <TextInput 
                onChangeText={newName => setName(newName)}
                value={name}
                placeholder='Alarma'
            />
            <RadioGroup 
                radioButtons={radioButtons} 
                onPress={(setSelectedId)}
                selectedId={selectedId}
                containerStyle={{
                    alignItems: 'flex-start',
                }}
            />

            <TouchableNativeFeedback onPress={showTimepicker}>
                <Text style={styles.TimeButton}>{ftime}</Text>
            </TouchableNativeFeedback>

            {selectedId == '2' &&
            
                <TouchableNativeFeedback onPress={showDatepicker}>
                    <Text style={styles.TimeButton}>{fdate}</Text>
                </TouchableNativeFeedback>
            }

            {selectedId == '3' &&

                <View>
                    <View style={styles.finalView}>
                        <TouchableNativeFeedback onPress={() => setDays({...days, lunes: !days.lunes})}>
                            <Text style={[styles.finalButtons, {backgroundColor: days.lunes ? '#616161':'#D9D9D9'} ]}>Lunes</Text>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => setDays({...days, martes: !days.martes})}>
                            <Text style={[styles.finalButtons, {backgroundColor: days.martes ? '#616161':'#D9D9D9'} ]}>Martes</Text>
                        </TouchableNativeFeedback>
                    </View>
                    
                    <View style={styles.finalView}>
                        <TouchableNativeFeedback onPress={() => setDays({...days, miercoles: !days.miercoles})}>
                            <Text style={[styles.finalButtons, {backgroundColor: days.miercoles ? '#616161':'#D9D9D9'} ]}>Miercoles</Text>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => setDays({...days, jueves: !days.jueves})}>
                            <Text style={[styles.finalButtons, {backgroundColor: days.jueves ? '#616161':'#D9D9D9'} ]}>Jueves</Text>
                        </TouchableNativeFeedback>
                    </View>
                    
                    <View style={styles.finalView}>
                        <TouchableNativeFeedback onPress={() => setDays({...days, viernes: !days.viernes})}>
                            <Text style={[styles.finalButtons, {backgroundColor: days.viernes ? '#616161':'#D9D9D9'} ]}>Viernes</Text>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={() => setDays({...days, sabado: !days.sabado})}>
                            <Text style={[styles.finalButtons, {backgroundColor: days.sabado ? '#616161':'#D9D9D9'} ]}>Sábado</Text>
                        </TouchableNativeFeedback>
                    </View>
                    
                    <View style={styles.finalView}>
                        <TouchableNativeFeedback onPress={() => setDays({...days, domingo: !days.domingo})}>
                            <Text style={[styles.finalButtons, {backgroundColor: days.domingo ? '#616161':'#D9D9D9'} ]}>Domingo</Text>
                        </TouchableNativeFeedback>
                    </View>
                </View>

            }

            <View style={styles.finalView}>

                <TouchableNativeFeedback onPress={closeModal}>
                    <Text style={styles.finalButtons}>Cancelar</Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={crearAlarma}>
                    <Text style={[styles.finalButtons, styles.buttonAccept]}>Aceptar</Text>
                </TouchableNativeFeedback>

            </View>
        </ScrollView>
    )

}

 const styles = StyleSheet.create({

    container:{
        margin: 30,
        marginTop:20,
        backgroundColor: '#AFAFAF',
        borderRadius: 20,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
        position:'absolute',
        alignSelf: 'center',
        width: '80%',
        height: '90%',
    },

    TimeButton:{
        backgroundColor: '#D9D9D9',
        borderRadius:10,
        margin: 10,
        height:40,
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 40,
        fontSize: 20
    },

    dayButton:{
        backgroundColor: '#616161',
    },

    finalView:{
        flexDirection: 'row',
    },

    finalButtons: {
        flex:1,
        backgroundColor: '#D9D9D9',
        borderRadius:10,
        margin: 10,
        height:40,
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 40,
        fontSize: 20,
    },  

    buttonAccept: {
        borderWidth: 2,
        borderColor: theme.backgroundColors.second,
        borderStyle: 'solid'
    }
 } )