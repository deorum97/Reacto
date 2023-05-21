const theme ={
// parte para colocar valores por defecto a los estilos

    // forma vasica para ponerlo
    // nomrbe_base : {
    //     principal : 'valor',
    //     secundario : 'valor'
    // }
    colors: {
        textPrimary: '#161b20',
        textSecundary: '#516a76'
    },

    backgroundColors: {
        first: '#000105',
        second: '#161b20',
        third: '#283239',
        fourth: '#3b4c56',
        fifth: '#516a76'
    },

    fontSizes: {
        empty : 20
    },

    fontWeights: {
        bold: '700'
    },

    alarms: {
        width: 'auto',
        height: 60,
        marginT: 20,
        marginH: 30,
        borderR: 30,
        padding:10,
        paddingL:30,
        justifyC:'center',
    },

    boton: {
        backgroundC: '#3b4c56',
        width: 60,
        height: 60,
        borderRadius: 100,
        marginBottom: 30,
        marginTop:15,
        position: 'absolute',
    },

    botonLine:{
        width: '60%',
        height: 5,
        color: '#161b20',
        borderRadius: 50,        
    }
}

//debe exportarse para usarse fuero y tambien importarlo para usarlo 'import theme from '../theme.js' '
export default theme