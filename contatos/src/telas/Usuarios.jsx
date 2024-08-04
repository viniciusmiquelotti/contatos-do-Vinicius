import {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Cabecalho} from '../componentes/Cabecalho'

export function Usuarios(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navegacao = useNavigation()

    function adicionarUsuario(){
        navegacao.navigate('login')        
    }

    return(
        <>
            <Cabecalho titulo="Usuários" />
            <View style={estilos.conteiner}>

                <TextInput
                    style={estilos.campo}
                    placeholder='Nome' 
                    placeholderTextColor='#e1e5f2'
                    onChangeText={setNome}
                    value={nome}
                />
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
                    onPress={adicionarUsuario}
                >
                    <Text style={estilos.textoBotao}>Confirmar</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
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
    },
    botao: {
        height: 50,
        width: 300,
        backgroundColor: '#01233c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
    },   
    textoBotao: {
        color: '#a9d6e5',
        fontSize: 16,
    } 
})