import { StyleSheet, Text, View, TextInput , Button } from 'react-native'
import React , { useState , useContext } from 'react'
import { ArticleContext } from '../context/ArticleContext'

export default function FormulaireAddArticle() {
    const {add} = useContext(ArticleContext)

    const [article, setArticle] = useState({titre : "" , contenu : "Morbi elementum nisi in lacus placerat, sit amet malesuada orci ornare. Praesent nec nibh egestas, sodales enim consequat, sodales lorem. Maecenas pellentesque erat at dignissim laoreet. Suspendisse potenti. Nunc aliquam sed arcu rhoncus pulvinar. Etiam vel consequat purus. Vivamus condimentum hendrerit bibendum. Nunc varius auctor eleifend. Nam sed lorem posuere, vehicula odio vitae, dictum metus. Vivamus rhoncus lacus ac nibh commodo tempus. Mauris gravida, nisi sed commodo pretium, est felis varius urna, a gravida tortor ante non urna. Mauris faucibus id nunc eget condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum et sollicitudin nibh. Duis quis felis dui. Fusce ullamcorper erat urna, vel eleifend ex pretium non. "})

    function modifArticle(t , name){
        const cloneArticle = {...article}
        cloneArticle[name] = t ;
        setArticle(cloneArticle)
    }

  return (
    <View>
      <Text style={{ fontSize: 25 }}>Ajouter un nouvel article</Text>
      <TextInput placeholder='titre' style={styles.input} onChangeText={function(t){
        modifArticle(t , "titre")
      }} value={article.titre}/>
      <TextInput placeholder='contenu' style={styles.input} multiline={true} numberOfLines={6} onChange={function(t){
        modifArticle(t , "contenu")
      }} value={article.contenu}/>
      <Button title={'ajouter'} onPress={function(){
          add(article)
        }}  color={'green'}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input : { borderColor : "black" , borderWidth : 1 , marginBottom : 10 , padding : 5 }
})