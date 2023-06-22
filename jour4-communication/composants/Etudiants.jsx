import { StyleSheet, Text, View } from 'react-native'
import React , {useState} from 'react'
import Notes from './Notes'

export default function Etudiants() {
    const [etudiants , setEtudiants] = useState([
        {id : 1 , nom : "Alain" , note : 10},
        {id : 2 , nom : "Benois" , note : 8},
        {id : 3 , nom : "Céline" , note : 17},
        {id : 4 , nom : "Damien" , note : 15},
    ])
  return (
    <View>
      <Text>Etudiants</Text>
      {etudiants.map(function(item, key){
        return <Notes key={key} nom={item.nom} note={item.note} />
      })}
      
    </View>
  )
}

const styles = StyleSheet.create({})