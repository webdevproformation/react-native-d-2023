import { StyleSheet, Text, View , Image , Dimensions , FlatList , Button , Alert } from 'react-native'
import React , {useState , useEffect } from 'react'
import { db } from '../config/firebase'
import { getDocs , collection , doc , deleteDoc } from "firebase/firestore"

const showAlert = ( supprimer  ) =>
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => { supprimer() },
        style: 'ok',
      },
    ]
  );



export default function ListeLivre({update , setUpdate}) {

    const [livres , setLivres] = useState([])
    useEffect( function(){
        getDocs(collection(db, "livres"))
            .then(function(reponse){
                const resultat = reponse.docs.map(function(doc){
                    return {...doc.data(), id : doc.id }
                })
                setLivres(resultat)
            })
    } , [update])

    function supprimer( id ){
        deleteDoc(doc(db, "livres", id))
            .then(function(){
                setUpdate(function(update){ return !update })
                alert("le livre a bien été supprimé de la bdd")
            })
    }

  return (
    <View style={{flex: 1}}>
      <Text>ListeLivre</Text>
      <View style={{ height : "auto" }}>
        <FlatList 
        data={livres}
        renderItem={function({item}){
            return <View>
            <Text>titre : {item.titre}</Text>
            <Text>id : {item.id}</Text>
            <Image 
                source={{ 
                    uri : item.couverture , 
                    width: Dimensions.get("window").width - 40 , 
                    height : 100 
                }} 
                fadeDuration={2000}
                /> 
            <Text>auteur : {item.auteur}</Text>
            <View style={{ flexDirection : "row" }}>
                <Button title={'modifier'} onPress={function(){}} color={'orange'} />
                <Button title={'supprimer'} onPress={function(){
                    showAlert(function(){ supprimer( item.id ) })  
                }} color={'red'} />
            </View>
        </View>
        }}
        keyExtractor={function(){ return Math.random().toString()}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})