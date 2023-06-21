import { StyleSheet, Text, View , 
        TextInput , 
        Button , 
        Switch , 
        TouchableOpacity 
                        } from 'react-native'
import Feather from "react-native-vector-icons/Feather"
import Foundation from "react-native-vector-icons/Foundation"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import React from 'react'

export default function Formulaire() {
  return (
    <View>
      <Text>Formulaire  </Text>
      <Foundation name={'comment-minus'} size={50} color={"red"} />
      <Feather name={"sun"} size={40} color={"orange"} />
      <Feather name={"sunrise"} size={40} color={"orange"} />
      <Feather name={"feather"} size={40} color={"orange"} />
      
      {/** 
       * le formulaire est composé de 3 champs et 1 bouton 
       * email 
       * sujet 
       * commentaire / explication
       * bouton de validation 
       */}
       <TextInput placeholder='saisir votre email' style={[styles.input , styles.boxShadow]} />
       <TextInput placeholder='le sujet' style={styles.input} />
       <TextInput placeholder='expliquer votre besoin' numberOfLines={3} multiline={true} style={styles.input}/>
       <View style={{flexDirection : "row" , alignItems: "center"}}>
        <Switch value={false}/>
        <Text>recevoir la newsletter ?</Text>
       </View>
       
       <Button title={"envoyer"} onPress={function(){}} color={"purple"} />
       
       <View style={{ flexDirection : "row" , justifyContent : "flex-end" }}>
        <TouchableOpacity 
        onPress={function(){ alert("envoyer") }} 
        style={{ backgroundColor : "green" , alignItems : "center", padding : 10 }}>
        <Text>Envoyer</Text>
        <FontAwesome name={"send"} size={40} color={"blue"} />
      </TouchableOpacity>
       </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    input: { borderColor : "black" , borderWidth : 1 , padding : 4 , borderRadius : 5 , marginBottom : 10  },
    boxShadow : {
        shadowColor : "red",
        shadowOffset : { width : -2 , height : 3 },
        shadowOpacity : 1, 
        shadowRadius : 5
    }
})
