import {StyleSheet, View} from 'react-native'
import {Cabecalho} from '../componentes/Cabecalho'

export function Configuracoes(){
    return(
        <>
            <Cabecalho titulo="Configurações" />
            <View style={estilos.conteiner}>

            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#000',
    }
})