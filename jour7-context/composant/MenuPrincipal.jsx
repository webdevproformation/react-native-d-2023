import { StyleSheet } from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Home from "../screens/Home"
import Login from "../screens/Login"
import Profil from "../screens/Profil"

import React , { useContext } from 'react'
import {AuthContext} from "../context/AuthContext"

const Tab = createBottomTabNavigator()

export default function MenuPrincipal() {
    const {profil} = useContext(AuthContext)

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name={'home'} component={Home} options={{
                tabBarIcon : function(){
                    return <FontAwesome5 name={'home'} size={25} color={'green'} />
                }
            }} />
            { profil.isLogged === false 
                ? 
                <Tab.Screen name={'login'} component={Login} options={{
                    tabBarIcon : function(){
                        return <FontAwesome5 name={'wifi'} size={25} color={'green'} />
                    }
                }} />
                : 
                <Tab.Screen name={'profil'} component={Profil} options={{
                    tabBarIcon : function(){
                        return <FontAwesome5 name={'user-circle'} size={25} color={'green'} />
                    }
                }} /> 
            }
            
            
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})