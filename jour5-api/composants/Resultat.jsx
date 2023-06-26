import { StyleSheet, Text, View, FlatList , Image , Dimensions } from 'react-native'
import React from 'react'

export default function Resultat({cocktails}) {
  return (
    <View >
      <Text>liste des cocktails disponibles :</Text>
      <FlatList 
        data={cocktails}
        renderItem={function({item}){
            return <View style={{ flexDirection : "column", margin :3 }}>
                <Image source={{ uri : item.strDrinkThumb }} style={styles.img} />
                <Text style={{ fontSize : 16}}>{item.strDrink}</Text>
                <Text numberOfLines={3} style={styles.text}>{item.strInstructions}</Text>
            </View>
         }}
         keyExtractor={function(item){ return item.idDrink}}
         numColumns={2}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    img : {width: (Dimensions.get("window").width -40) /2 , height : 150},
    text : {width: (Dimensions.get("window").width -40) /2 },
})