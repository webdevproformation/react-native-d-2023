import { StyleSheet, Text, View } from 'react-native'
import React , {useEffect} from 'react'

export default function Resultat({route}) {
    useEffect(function(){
        // route.params.setEmail("")
    }, [])
  return (
    <View>
      <Text>Resultat {route.params.recherche}</Text>
      <Text>{route.params.prix}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})