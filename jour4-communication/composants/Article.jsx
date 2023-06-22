import { StyleSheet, Text, View , Button } from 'react-native'
import React , {useState} from 'react'

export default function Article() {
    const [ data , setData ] = useState({ titre : "Article 1" , nbLike : 11 })
    const [commentaire , setCommentaire] = useState([])
  return (
    <View>
      <Text>{data.titre}</Text>
      <Text>{ data.nbLike }</Text>
      <Button title={"augmenter + 1"} onPress={function(){
        const cloneData = {... data} 
        cloneData.nbLike ++
        setData(cloneData)
      }}/>
      <Button title={'ajouter commentaire'} onPress={function(){
        const cloneCommentaire = [...commentaire];
        cloneCommentaire.push("nouveau commentaire");
        setCommentaire(cloneCommentaire)
      }} />
      {commentaire.map(function(item , key){
        return <Text key={key}> {item} </Text>
      })}


    </View>
  )
}

const styles = StyleSheet.create({})