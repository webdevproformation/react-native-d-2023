import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'

export default function Exo1() {
  return (
    <View>
        <View style={styles.ligne}>
            <Image source={require("../assets/images/paysage.jpg")} style={styles.img3}/>
            <Image source={{ uri : "https://via.placeholder.com/300x100" , width: 300 , height : 100 }} style={styles.img2}/>
        </View>
        <View style={styles.ligne}>
            <Image source={{ uri : "https://via.placeholder.com/300x100" , width: 300 , height : 100 }} style={styles.img1}/>
            <Image source={{ uri : "https://via.placeholder.com/300x100" , width: 300 , height : 100 }} style={styles.img2}/>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    ligne : { flexDirection : "row", marginBottom : 10 },
    img1 : { flex : 1, marginRight :10 },
    img2 : { flex : 1 },
    img3 : {width : '49%' , height : 100 , marginRight :10}
})

// rdv 13h45 bon appétit !! 