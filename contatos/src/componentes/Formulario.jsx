import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { useState } from "react";
import { Feather } from '@expo/vector-icons'

export function Formulario({adicionar}){ 

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    return(
        <View style={estilos.conteiner}>

            <View style={estilos.conteinerCampos}>
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
                    placeholder='Telefone'
                    placeholderTextColor='#e1e5f2'
                    keyboardType='phone-pad'                
                    onChangeText={setTelefone}
                    value={telefone}

                />
            </View>

            <TouchableOpacity 
                style={estilos.botao}
                onPress={() => adicionar(nome, email, telefone)}
            >
                <Text>
                    <Feather 
                        name="user-plus" 
                        size={24} 
                        color='#dee2e6' 
                    />  
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 10,
    },
    conteinerCampos: {
        flex: 1,
    },
    campo: {
        height: 50,
        backgroundColor: '#01233c',
        color: '#a9d6e5',
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    botao: {
        width: 60,
        height: 173,
        marginStart: 10,
        backgroundColor: '#01233c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        
    },
  });