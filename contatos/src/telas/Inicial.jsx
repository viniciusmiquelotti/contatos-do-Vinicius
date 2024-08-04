import {StyleSheet, View, ImageBackground} from 'react-native'
import {Cartao} from '../componentes/Cartao'

export function Inicial(){
    return(
        <View style={estilos.conteiner}>
            <ImageBackground
                style={estilos.fundo}
                source={require('../../assets/fundo.jpg')}
            >

                <Cartao 
                    titulo="Contatos" 
                    imagem={require('../../assets/vermelho.jpg')}
                    destino="contatos"
                />
                
                <Cartao 
                    titulo="Usuários" 
                    imagem={require('../../assets/verde.jpg')}
                    destino="usuarios"
                />
                
                <Cartao 
                    titulo="Configurações" 
                    imagem={require('../../assets/roxo.jpg')}
                    destino="configuracoes"
                />

            </ImageBackground>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#000',
    },
    fundo: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

        width: '100%',
        height: '100%',
    }
})
