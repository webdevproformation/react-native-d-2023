import { StyleSheet, Text, View , Button } from 'react-native'
import React , { useState } from 'react'

export default function Exo1() {
    const [prix, setPrix] = useState(200);
    // const [couleur , setCouleur] = useState("blue")
    function augmenterPlus10(){
        setPrix(prix + 10)
    }
    function diminuerMoins10(){
        setPrix(prix - 10)
    }
  return (
    <View>
      <Text>Exo1</Text>
      <Text style={{ backgroundColor : prix > 250 ? "red" : "blue" }}>prix : {prix} € </Text>
      <Button title={"augmenter de + 10"} onPress={augmenterPlus10 } />
      <Button title={"augmenter de - 10"} onPress={diminuerMoins10} />
    </View>
  )
}

const styles = StyleSheet.create({})