import { StyleSheet, Text, View , Button } from 'react-native'
import React , { useState } from 'react'

export default function Exo1() {
    const [prix, setPrix] = useState(200);
    // const [couleur , setCouleur] = useState("blue")
    function augmenterPlus10(){
        setPrix(prix + 10) // les fonctions en 2ème paramètre du useState() 
                           // si on a besoin d'attendre que le state soit modifié useEffect()
                           // lag 
        // if(prix > 250 )  setCouleur("red")
    }
    function diminuerMoins10(){
        setPrix(prix - 10)
        // if(prix <= 250 )  setCouleur("blue")
    }
  return (
    <View>
      <Text>Exo1</Text>
      <Text style={{ backgroundColor : prix > 250 ? "red" : "blue" }}>prix : {prix} € </Text>
      <Button title={"augmenter de + 10"} onPress={augmenterPlus10 } />
      <Button title={"augmenter de - 10"} onPress={diminuerMoins10} />
    </View>
  )
}

const styles = StyleSheet.create({})

// function a(){}
// const a = function(){}
// document.querySelector("p").addEventListener("click", function(){})
// document.querySelector("p").addEventListener("click", a)
// document.querySelector("p").addEventListener("click", a())