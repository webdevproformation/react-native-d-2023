import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function Btn({navigation , url , style , texte}) {
  return (
    <TouchableWithoutFeedback onPress={function(){
        navigation.navigate(url)
      }}>
        <Text style={style}>{texte}</Text>
      </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({})