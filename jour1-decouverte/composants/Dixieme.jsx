import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Dixieme() {
    const informations = [
        {id : 1 , nom : "PS4" , prix : 500 , enStock : true },
        {id : 2 , nom : "PS5" , prix : 200 , enStock : false },
        {id : 3 , nom : "NintendoDS" , prix : 800 , enStock : true },
        ]
  return (
    <View>
      { informations.map(function(item, key){
        return <Text key={key}>
            {item.nom} à {item.prix} € en { item.enStock ? "Vente" : "non disponible" }
        </Text>
      }) }
      { informations.map(function(item, key){
        return <Text key={key}>
            {`${item.nom} € en ${item.prix} ${item.enStock ? "Vente" : "non disponible"}`}
        </Text>
      }) }
    </View>
  )
}

const styles = StyleSheet.create({})