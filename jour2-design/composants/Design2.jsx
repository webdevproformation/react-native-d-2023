import { StyleSheet, Text, View , Dimensions , Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'

export default function Design2() {

   // console.warn(Dimensions.get('window').width / 2)

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={styles.logo}/>
        <View style={styles.btn}/>
      </View>
      <View style={styles.banniere}>
            <Button title={"action"} onPress={function(){}} />
      </View>
      <View style={styles.boutons}>
        <View style={styles.btn1}>
            <Text style={styles.text}>Accueil</Text>
        </View>
        <View style={styles.btn1}>
            <Text  style={styles.text}>Connexion</Text>
        </View>
        <View style={styles.btn1}>
            <Text  style={styles.text}>Profil</Text>
        </View>
        <View style={styles.btn1}>
            <Text  style={styles.text}>Vidéo</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex :1
    },
    menu: {
        height : 50,
        marginBottom :20,
        marginTop : StatusBar.currentHeight, 
        backgroundColor : "red",
        paddingHorizontal : 10,
        paddingVertical: 10,
        flexDirection : "row",
        justifyContent : "space-between"
    },
    logo: {
        width : 150, 
        backgroundColor : "blue",
    },
    btn : {
        width : 50, 
        backgroundColor : "blue",
    },
    banniere: {
        flex : 5 , 
        marginBottom :20,
        backgroundColor : "pink",
        marginHorizontal :10,
        justifyContent: "center",
        alignItems : "center"
    },
    boutons: {
        flex : 3 , 
        backgroundColor : "yellow" ,
        flexDirection : "row",
        flexWrap : "wrap", 
        justifyContent: "space-between",
        padding : 10
    }, 
    btn1 : {
         width : "49%", 
       /*  width : (Dimensions.get("window").width - 30) / 2, */
        backgroundColor : "green" ,
        height : "49%" ,
        marginBottom : 5,
        justifyContent: "center",
        alignItems : "center"
    },
    text :{
        fontSize : 25,
        color : "white",
        fontFamily : "serif",
        fontWeight : 900 ,
        textDecorationColor : "pink",
        textDecorationStyle : "solid",
        textDecorationLine : "underline"
    }
})