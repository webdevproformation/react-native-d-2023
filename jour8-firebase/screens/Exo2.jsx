import { StyleSheet, Text, View , FlatList , Button } from 'react-native'
import React , {useEffect, useState} from 'react'
import { db } from '../config/firebase'
import { collection , getDocs } from "firebase/firestore"

export default function Exo2() {
    const [clients , setClients] = useState([])
    useEffect( function(){
        getDocs(collection(db, "clients"))
            .then(function(reponse){
                const resultat = reponse.docs.map(function(doc){
                    return doc.data()
                })
                setClients(resultat)
            })
    }, [])
  return (
    <View style={{ marginHorizontal : 10 }}>
      <Text>Exo2</Text>
    <FlatList 
        data={clients}
        renderItem={function({item}){
            return <View >
                <Text style={{ fontSize : 20 }}>{item.nom}</Text>
                <Text>{item.email}</Text>
                <Text>{item.role}</Text>
                <View style={{ flexDirection : "row"  }}>
                    <Button title={'modifier'} onPress={function(){}} color={'orange'} />
                    <Button title={'supprimer'} onPress={function(){}} color={'red'} />
                </View>
            </View>
        }}
        keyExtractor={function(item){
            return item.nom
        }}
    />
    </View>
  )
}

const styles = StyleSheet.create({})