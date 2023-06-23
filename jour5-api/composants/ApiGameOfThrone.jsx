import { StyleSheet, Text, View , Image } from 'react-native'
import React , {useState , useEffect} from 'react'
export default function ApiGameOfThrone() {
    const [personnage, setPersonnage] = useState({}) // objet vide 
    useEffect( function(){
        // exécuter une requête ajax uniquement lors de la phase de Monté du composant
        // mettre la requête ajax dans un useEffect( , [])
        fetch("https://thronesapi.com/api/v2/Characters/1")
            .then(function(reponse){ return reponse.json()})
            .then(function(data){ setPersonnage(data)  })
       /*  axios.get("https://thronesapi.com/api/v2/Characters/1")
            .then(function(data){ setPersonnage(data) }) */
    }, [])
  return (
    <View>
      <Text>ApiGameOfThrone</Text>
      <Text>{JSON.stringify(personnage)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})