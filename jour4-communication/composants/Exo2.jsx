import { StyleSheet, Text, View , Button } from 'react-native'
import React , {cloneElement, useState} from 'react'

export default function Exo2() {
    const [formation, setFormation] = useState({
        nom : "CDA",
        duree : 4 ,
        prix : 200
    })
    function augmenterDuree(){
        const cloneFormation = {...formation}
        cloneFormation.duree += 2
        setFormation(cloneFormation)
    }
    function diminuerPrix(){
        const cloneFormation = {...formation}
        cloneFormation.prix -= 20
        setFormation(cloneFormation)
    }
  return (
    <View>
      <Text>nom formation : {formation.nom}</Text>
      <Text>duree : {formation.duree}</Text>
      <Text>prix : {formation.prix} €</Text>
      <View style={{ flexDirection : "row" , justifyContent: "space-around" }}>
        <Button title={'augmenter la duree + 2'} onPress={augmenterDuree} color={'green'}/>
        <Button title={'diminuer le prix - 20'} onPress={diminuerPrix} color={'orange'}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})