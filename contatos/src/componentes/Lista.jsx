import { View, Text, FlatList, StyleSheet } from "react-native"
import { Contato } from './Contato'


export function Lista({colecao, remover}){

    return(
        <View style={estilos.conteiner}>
  
            <FlatList 
                data={colecao}
                keyExtractor={ item => item.codigo}
                renderItem={ ( { item } ) => (
                    <Contato 
                        nome={item.nome}
                        email={item.email}
                        telefone={item.telefone}
                        excluir={ () => remover(item) }
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={estilos.texto}>
                        Nenhum contato armazenado.
                    </Text>
                )}                
            />

        </View>
    )
}


const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
})