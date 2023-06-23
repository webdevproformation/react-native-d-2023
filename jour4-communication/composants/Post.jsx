import { StyleSheet, Text, View } from 'react-native'
import React , {useState} from 'react'
import Commentaire from './Commentaire'

export default function Post() {
    const [article , setArticle ] = useState({
        titre : "utiliser les composants ",
        contenu : "commentaire faire fonction React avec plusieurs composants",
        commentaires : []
    })
  return (
    <View>
      <Text style={{ fontSize : 30 }}>{article.titre}</Text>
      <Text>{article.contenu}</Text>
      {article.commentaires.map(function(item, key){
        return <Text key={key}>- {item}</Text>
      })}
      <Commentaire article={article} setArticle={setArticle} />
    </View>
  )
}

const styles = StyleSheet.create({})