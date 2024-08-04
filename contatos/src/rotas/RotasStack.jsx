import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login} from '../telas/Login'
import {Usuarios} from '../telas/Usuarios'
import {RotasTab} from '../rotas/RotasTab'

const {Navigator, Screen} = createNativeStackNavigator()

export function RotasStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} >

                <Screen 
                    name='login'
                    component={Login}
                />

                <Screen 
                    name='usuarios'
                    component={Usuarios}
                />

                <Screen 
                    name='autenticado'
                    component={RotasTab}
                />
            </Navigator>
        </NavigationContainer>
    )
}
