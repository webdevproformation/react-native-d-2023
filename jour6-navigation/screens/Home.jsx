import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

export default function Home( { navigation } ) {
  return (
    <View>
      <Text>voici le composant Home</Text>
      <View style={{ flexDirection : "row" , justifyContent : "space-between" , marginVertical : 10 }}>
        <Button title={'aller voir la page contact'} onPress={function(){
            navigation.navigate("nous-contacter")
        }} />
        <Button title={'se connecter'} onPress={function(){
            navigation.navigate("login")
        }} />
        {/** 
         * il n'existe pas de composant <Link /> 
         * c'est directement le composant <Button /> 
        **/}
      </View>
      <View>
      <Button title={'laisser un message'} onPress={function(){
            navigation.navigate("message")
        }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})