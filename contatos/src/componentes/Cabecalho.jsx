import { View, Text, StyleSheet } from "react-native"

export function Cabecalho({titulo}){
    return(
        <View style={estilos.conteiner}>
            <Text style={estilos.texto}>{titulo}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        height: 55,
        backgroundColor: '#01233c',
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: '#e1e5f2',
        fontSize: 24,
        fontWeight: '600'
    }
  });