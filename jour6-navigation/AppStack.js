import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , StatusBar as S } from 'react-native';

// ajouter la navigation par Pile (Stack Navigation)

import { NavigationContainer } from "@react-navigation/native"
// liaison entre les liens et => le Router 

import { createNativeStackNavigator } from "@react-navigation/native-stack"
// quel type de navigation on veut utiliser 

import Home from './stack-screens/Home' ;
import NousContacter from "./stack-screens/NousContacter" ;
import Login from "./stack-screens/Login" ; 
import MentionLegale from './stack-screens/MentionLegale';
import Message from './stack-screens/Message';
import Resultat from './stack-screens/Resultat';
// récupérer les différentes Pages 

const Stack =  createNativeStackNavigator(); // qui permet de créer le router

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator >
          {/** routes 
           * emojipedia
           * https://emojipedia.org/soccer-ball/
          */}
          <Stack.Screen name={'accueil'} component={Home} options={{
            headerTitle : "Bienvenue sur l'Accueil ⚽", 
            headerStyle : {backgroundColor : "red"}, 
            headerTintColor : "white",
            headerTitleAlign : "center"
          }} />
          <Stack.Screen name={'nous-contacter'} component={NousContacter}/>
          <Stack.Screen name={'login'} component={Login} initialParams={{nom : "Alain"}} />
          <Stack.Screen name={'mention-legale'} component={MentionLegale} options={{
            headerShown : false
          }} />
          <Stack.Screen name={'message'} component={Message} />
          <Stack.Screen name={'resultat'} component={Resultat} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : S.currentHeight,
  },
});
