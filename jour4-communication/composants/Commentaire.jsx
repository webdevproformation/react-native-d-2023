import { StyleSheet, Text, View , TextInput , Button } from 'react-native'
import React from 'react'
export default function Commentaire({article, setArticle}) {
  return (
    <View>
      <Text style={{ fontSize : 18 }}>Ajouter un nouveau Commentaire</Text>
      <TextInput 
        placeholder='laisser un commentaire' 
        multiline={true} numberOfLines={4} 
        style={styles.input}/>
      <Button title={'ajouter'} onPress={function(){}} />
    </View>
  )
}
const styles = StyleSheet.create({
    input : { borderColor : "black" , borderWidth : 1 , padding : 5 , borderRadius : 5 ,
            marginVertical : 10}
})