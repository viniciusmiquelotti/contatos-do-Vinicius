import {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export function Login(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navegacao = useNavigation()

    function autenticarUsuario(){
        navegacao.navigate('autenticado')
    }

    function novoUsuario(){
        navegacao.navigate('usuarios')
    }

    return(
        <View style={estilos.conteiner}>

            <Image 
                style={estilos.logo}
                source={require('../../assets/logo.jpg')}
            />

            <View style={estilos.formularioConteiner}>

                <TextInput 
                    style={estilos.campo}
                    placeholder='Email'
                    placeholderTextColor='#e1e5f2'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email}      
                />
                <TextInput 
                    style={estilos.campo}
                    placeholder='Senha'
                    placeholderTextColor='#e1e5f2'              
                    onChangeText={setSenha}
                    value={senha}
                />

                <TouchableOpacity 
                    style={estilos.botao}
                    onPress={autenticarUsuario}
                >
                    <Text style={estilos.textoBotao}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={estilos.cadastro}
                    onPress={novoUsuario}
                >
                    <Text style={estilos.textoBotao}>Cadastre-se</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    campo: {
        height: 50,
        width: 300,
        backgroundColor: '#01233c',
        color: '#a9d6e5',
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#0077b6',
    },
    botao: {
        height: 50,
        width: 300,
        backgroundColor: '#01233c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#0077b6',
    },   
    textoBotao: {
        color: '#a9d6e5',
        fontSize: 16,
    }, 
    cadastro: {
        width: 300,
        alignItems: 'flex-end',
        borderRadius: 5,
        marginVertical: 10,
    },
    logo: {     
        height: 400,
    },
    formularioConteiner: {
        flex: 1,
        marginTop: -30
    },

})