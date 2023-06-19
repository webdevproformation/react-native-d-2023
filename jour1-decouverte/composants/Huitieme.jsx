// snippet 
// installer plugin dans Visual Code 
// snippet 
// refc
// Simple React Snippets
//v1.2.7
// Burke Holland
/**
 * ES7+ React/Redux/React-Native snippets
v4.4.3
dsznajder
 */
/* rnfs
rnfe */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// opérateur ternaire 
// { condition ? vrai : faux }
// deuxieme manière && 
// { condition && vrai  }

export default function Huitieme() {
    const distance = 2000 ;

  return (
    <View>
        { distance < 1000 && <Text>la durée du trajet est inférieure à 3h</Text> }
    </View>
  )
}

const styles = StyleSheet.create({})
