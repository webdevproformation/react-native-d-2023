import { StyleSheet, Text, View , FlatList , Button } from 'react-native'
import React from 'react'

export default function Exo2() {
    const articles = [
        { id : 1 , titre : "article 1" , contenu : "lorem" , auteur : "Alain" },
        { id : 2 , titre : "article 2" , contenu : "lorem" , auteur : "Alain" },
        { id : 3 , titre : "article 3" , contenu : "lorem" , auteur : "Céline" },
        { id : 4 , titre : "article 4" , contenu : "lorem" , auteur : "Céline" },
    ] 
  return (
    <View>
      <Text>Exo2</Text>
      <FlatList 
        data={articles}
        renderItem={function({item}){
            return (
                <View style={{ flex : 1, margin : 1 }}>
                    <Text style={{ fontSize : 20 , textAlign: "center"}}>{item.titre}</Text>
                    <Text>{item.contenu}</Text>
                    <Text style={{ fontSize : 10 }}>{item.auteur}</Text>
                    <Text><Button title={'lire la suite ...'} onPress={function(){}}/></Text>
                </View>
            )
        }}
        numColumns={2}
        keyExtractor={function(item){return item.id}}
      />
    </View>
  )
}

const styles = StyleSheet.create({})