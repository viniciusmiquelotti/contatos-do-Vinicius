import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Inicial} from '../telas/Inicial'
import {Contatos} from '../telas/Contatos'
import {Usuarios} from '../telas/Usuarios'
import {Configuracoes} from '../telas/Configuracoes'
import { MaterialIcons } from '@expo/vector-icons'

const {Navigator, Screen} = createBottomTabNavigator()

export function RotasTab(){
    return(

        <Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#6c757c',
                tabBarStyle: {
                    backgroundColor: '#01233c',
                    height: 55,
                    borderTopWidth: 0,
                }
            }}
        >

            <Screen 
                name='inicial'
                component={Inicial}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    )
                }}
            />

            <Screen 
                name='contatos'
                component={Contatos}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <MaterialIcons name="menu-book" size={size} color={color} />
                    )
                }}
            />

            <Screen 
                name='usuarios'
                component={Usuarios}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <MaterialIcons name="person" size={size} color={color} />
                    )
                }}
            />

            <Screen 
                name='configuracoes'
                component={Configuracoes}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <MaterialIcons name="settings" size={size} color={color} />
                    )
                }}
            />

        </Navigator>
    )
}