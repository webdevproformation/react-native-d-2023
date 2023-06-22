import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

export default function B({setNb}) {
  return (
    <View>
      <Text>B</Text>
      <Button onPress={function() {  setNb(40) }} title={"modifier"} />
    </View>
  )
}

const styles = StyleSheet.create({})