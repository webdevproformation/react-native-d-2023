import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

export default function Btn({ couleur, nombre , text }) {
  return (
    <View>
      <Button 
        title={text} 
        color={couleur} 
        onPress={function(){ alert(nombre)}} 
      />
    </View>
  )
}

const styles = StyleSheet.create({})