import { StyleSheet, Text, View , FlatList , Image } from 'react-native'
import React from 'react'

export default function Liste() {
    const etudiants = [
        {id : 1 , nom : "Pierre" , img : "https://via.placeholder.com/300x100"},
        {id : 2 , nom : "Zorro" , img : "https://via.placeholder.com/300x100"},
        {id : 3 , nom : "Anna" , img : "https://via.placeholder.com/300x100"},
        {id : 4 , nom : "Céline" , img : "https://via.placeholder.com/300x100"},
    ]

  return (
    <View>
      <Text>Liste</Text>
      <FlatList 
        data={etudiants}
        renderItem={function( { item } ){
            return <View style={styles.item}>
                <Image source={{ uri : item.img , flex : 1 , height : 100 }} resizeMode={'cover'}/>
                <Text>{ item.id } - {item.nom}</Text>
            </View>
        }}
        numColumns={2}
        keyExtractor={function(item){ return item.id }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    item : { flex: 1, flexDirection : "column" , margin : 1 }
})