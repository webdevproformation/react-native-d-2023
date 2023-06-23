import { StyleSheet,  View, TextInput, Button } from 'react-native'
import React from 'react'

export default function FormulaireRecherche({setRecherche, setUpdate , recherche}) {
  return (
    <View style={{ flexDirection : "row" , alignItems : "center"}}>
      <TextInput placeholder={'saisir le nom d\'cocktail'} 
        style={styles.input} 
        value={recherche}
        onChangeText={function(texteSaisi){ setRecherche(texteSaisi) }}
        />
      <Button title={'go'} onPress={function(){
        setUpdate(function(update){ return !update})
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
    input : { borderColor : "black" , flex : 1 , marginRight : 10 , borderWidth : 1 , padding : 5 }
})