import { StyleSheet, Text, View } from 'react-native'
import React , {useState} from 'react'
import Btn from './Btn'

export default function Valeur() {
    const [nb, setNb] = useState(0)
    const [ boutons , setBoutons ] = useState([
        { couleur : "red" , text : "bonjour" },
        { couleur : "green" , text : "hello" },
        { couleur : "blue" , text : "comment allez vous ??" },
        { couleur : "yellow" , text : "fin de journée" },
        { couleur : "purple" , text : "super react" },
    ])
  return (
    <View>
      <Text>Valeur</Text>
      { boutons.map(function(item, key ){
        return <Btn 
                    nombre={ nb } 
                    couleur={ item.couleur } 
                    text={item.text} 
                    key={key} 
                />
      }) }
      {/* <Btn nombre={ nb } couleur={"red"} text={"bonjour"} />
      <Btn nombre={ nb } couleur={"green"} text={"hello"} />
      <Btn nombre={ nb } couleur={"blue"} text={"comment allez vous ??"} /> */}
      {/** ajouter des props lorsque j'exécutele composant enfant Btn */}
    </View>
  )
}

const styles = StyleSheet.create({})