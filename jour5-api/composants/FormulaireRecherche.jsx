import { StyleSheet,  View, TextInput, Button } from 'react-native'
import React from 'react'

export default function FormulaireRecherche() {
  return (
    <View style={{ flexDirection : "row" , alignItems : "center"}}>
      <TextInput placeholder={'saisir le nom d\'cocktail'} style={styles.input}/>
      <Button title={'go'} onPress={function(){}} />
    </View>
  )
}

const styles = StyleSheet.create({
    input : { borderColor : "black" , flex : 1 , marginRight : 10 , borderWidth : 1 , padding : 5 }
})