import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import React from 'react'

export default function Exo3() {
  return (
    <View>
      <Text>Exo3</Text>
      <TextInput placeholder={'votre nom'} style={styles.input} />
      <TextInput placeholder={'votre adresse'} numberOfLines={5} multiline={true} style={styles.input}/>
      <TextInput placeholder={'votre@email.fr'} style={styles.input}/>
      <View style={styles.zoneSubmit}>
        <TouchableOpacity style={styles.btnSubmit} onPress={function(){}}>
            <MaterialCommunityIcons name={'message-alert'} size={40} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    input : { 
        marginBottom : 10 , 
        borderColor : "#0A6EBD" , 
        borderWidth: 1 , 
        borderRadius :5 ,
        paddingVertical : 5,
        paddingHorizontal : 8
    },
    zoneSubmit: {
        flexDirection : "row",
        justifyContent : "center"
    },
    btnSubmit : {
        borderColor : "#0A6EBD" , 
        borderWidth: 1 , 
        borderRadius :5 ,
        paddingVertical : 10,
        paddingHorizontal : 30,
        backgroundColor : "#A1C2F1"
    }
})