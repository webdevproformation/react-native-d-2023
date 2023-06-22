import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Notes({ note, nom }) {
  return (
    <View style={{ flexDirection : "row" }}>
        <Text style={{flex : 1}}>nom étudiant : { nom } </Text>
        <Text style={{ backgroundColor : note >= 10 ? "green" : "red" }}>note : { note  } / 20</Text> 
    </View>
  )
}

const styles = StyleSheet.create({})

/* function calcul(a, b){
}

calcul( 1, 2 ) 

function Calcul(a, b){
}
<Calcul a={1} b={2} />
<Calcul a={1} b={2} />*/