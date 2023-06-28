import { StyleSheet, Text, View , TextInput , TouchableOpacity  } from 'react-native'
import React from 'react'

export default function AjouterArticle() {
  return (
    <View style={styles.box}>
      <Text>AjouterArticle</Text>
      <TextInput placeholder='titre' style={styles.input} />
      <TextInput placeholder='contenu' style={styles.input} multiline={true} numberOfLines={5}/>
      <TouchableOpacity style={styles.boxBtn}>
            <Text style={styles.btn}>ajouter</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    box : { marginHorizontal : 20},
    input : { borderColor : "black" , borderWidth : 1 , padding : 10 , marginBottom : 10 , borderRadius : 10 },
    boxBtn : { flexDirection : "row" , justifyContent : "center"},
    btn : { backgroundColor : "red" , padding : 10 , width : "50%" , borderRadius : 10 , textAlign : "center" , fontSize : 22 }
})