import { StyleSheet, Text, View , Button, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Btn from '../composant/Btn'

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
      <View>
        <Btn navigation={navigation} style={{color: "blue"}} url={"login"} texte={'texte 1'}/>
        <Btn navigation={navigation} style={{color: "green" , fontSize : 30}} url={"mention-legale"} texte={'btn 2'}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})