import { StyleSheet, Text, View  } from 'react-native'
import React from 'react'
import FormulaireRecherche from './FormulaireRecherche'
import Resultat from './Resultat'

export default function Recherche() {

    // https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
  return (
    <View>
      <Text style={{ fontSize : 25 }}>Rechercher un cocktail :</Text>
      <FormulaireRecherche />
      <Resultat />
    </View>
  )
}

const styles = StyleSheet.create({})