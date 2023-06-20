import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

export default function Onzieme() {
  return (
    <View>
      <Text>Onzieme</Text>
      <Button title={'action 1'} onPress={function(){ alert("j'ai pressé") }}/>
      {/** title est une props / propriété du composant  */}
      {/** <h1 class="toto">  */}
    </View>
  )
}

const styles = StyleSheet.create({})