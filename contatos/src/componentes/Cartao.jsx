import {StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export function Cartao({titulo, imagem, destino}){

    const navegacao = useNavigation()

    const navegar = rota => {
        navegacao.navigate(rota)
    }

    return(
        <TouchableOpacity 
            style={estilos.conteiner}
            onPress={() => navegar(destino)}
        >

            <Image 
                style={estilos.imagemCartao}
                source={imagem}
            />

            <Text style={estilos.titulo}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    conteiner: { 
        backgroundColor: '#fff',
        opacity: 1,
        height: 150,
        width: 150,
        margin: 20,
        borderRadius: 10,
        overflow: 'hidden'
    },
    imagemCartao: {
        width: '100%',
        height: 120,
        objectFit: 'cover'
    },
    titulo: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '900',
        marginTop: 3
    }
})