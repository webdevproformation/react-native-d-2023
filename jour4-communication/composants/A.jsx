import { StyleSheet, Text, View } from 'react-native'
import React , {useState} from 'react'
import B from './B'

export default function A() {
    const [nb, setNb] = useState(55)
  return (
    <View>
      <Text>{nb}</Text>
      <B setNb={setNb}/>
      {/** dans les props vous pouvez envoyer du parent vers enfant 
       * nmobre text MAIS aussi des fonctions */ }
    </View>
  )
}

const styles = StyleSheet.create({})