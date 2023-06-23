import { StyleSheet, Text, View , TextInput , Button } from 'react-native'
import React , {useState} from 'react'
export default function Commentaire({article, setArticle}) {
    const [texte , setTexte] = useState("")
    function submit(){
        const cloneArticle = {...article};
        cloneArticle.commentaires.push(texte)
        setArticle(cloneArticle) // ajouter les commentaires 
        setTexte("") // permet de vider le textarea du texte écrit dedans 
    }
  return (
    <View>
      <Text style={{ fontSize : 18 }}>Ajouter un nouveau Commentaire</Text>
      <TextInput 
        placeholder='laisser un commentaire' 
        multiline={true} numberOfLines={4} 
        style={styles.input} 
        onChangeText={function( texteSaisi ){ setTexte(texteSaisi) }} 
        value={texte}/>
      <Button title={'ajouter'} onPress={submit} />
    </View>
  )
}
const styles = StyleSheet.create({
    input : { borderColor : "black" , borderWidth : 1 , padding : 5 , borderRadius : 5 ,
            marginVertical : 10}
})

//<input type="text" onchange="">
// <button onclick=""></button>