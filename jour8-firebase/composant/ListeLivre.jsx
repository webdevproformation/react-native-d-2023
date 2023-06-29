import { StyleSheet, Text, View , Image , Dimensions , ScrollView , FlatList } from 'react-native'
import React , {useState , useEffect } from 'react'
import { db } from '../config/firebase'
import { getDocs , collection } from "firebase/firestore"

export default function ListeLivre({update}) {

    const [livres , setLivres] = useState([])
    useEffect( function(){
        getDocs(collection(db, "livres"))
            .then(function(reponse){
                const resultat = reponse.docs.map(function(doc){
                    return doc.data()
                })
                setLivres(resultat)
            })
    } , [update])

  return (
    <View style={{flex: 1}}>
      <Text>ListeLivre</Text>
      <View style={{ height : "auto" }}>
        <FlatList 
        data={livres}
        renderItem={function({item}){
            return <View>
            <Text>titre : {item.titre}</Text>
            <Image 
                source={{ 
                    uri : item.couverture , 
                    width: Dimensions.get("window").width - 40 , 
                    height : 100 
                }} 
                fadeDuration={2000}
                /> 
            <Text>auteur : {item.auteur}</Text>
        </View>
        }}
        keyExtractor={function(){ return Math.random().toString()}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})