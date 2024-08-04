import {StatusBar, View, StyleSheet} from 'react-native'
import {RotasStack} from './src/rotas/RotasStack'

export default function App() {
  return (
    <View style={estilos.conteiner}>
      <StatusBar barStyle='default' />
      <RotasStack />
    </View>
  );
}

const estilos = StyleSheet.create({
    conteiner: {
      flex: 1,
    },
  });
