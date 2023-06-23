import { StyleSheet, Text, View  } from 'react-native'
import React , { useState , useEffect } from 'react'
import FormulaireRecherche from './FormulaireRecherche'
import Resultat from './Resultat'

export default function Recherche() {
    const [cocktails , setCocktails] = useState([])
    const [recherche , setRecherche] = useState("margarita")
    const [update, setUpdate] = useState(true)

    useEffect( function(){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${recherche}`)
            .then(function(reponse){ return reponse.json()})
            .then(function(data){ setCocktails(data.drinks)})
    }, [update])

  return (
    <View>
      <Text style={{ fontSize : 25 }}>Rechercher un cocktail :</Text>
      <FormulaireRecherche setRecherche={setRecherche} setUpdate={setUpdate} recherche={recherche}/>
      <Resultat cocktails={cocktails}/>
    </View>
  )
}

const styles = StyleSheet.create({})