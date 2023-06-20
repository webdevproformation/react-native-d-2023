import { StyleSheet, Text, View , StatusBar } from 'react-native'
import React from 'react'

export default function Design1() {
    
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.btn1}/>
        <View style={styles.btn2}/>
        <View style={styles.btn3}/>
      </View>
      <View style={styles.body}>
        <View style={styles.article1} />
        <View style={styles.article2} />
      </View>
      <View style={styles.footer}>
        <View style={styles.icone1} />
        <View style={styles.icone2} />
        <View style={styles.icone3} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header :{
        backgroundColor : "red",
        flex: 1 ,
        marginBottom : 20,
        marginTop : StatusBar.currentHeight,
        flexDirection : "row" ,  /** élément dans le header doivent être 
        l'un à côté de l'autre */
        padding: 10
    },
    body:{
        backgroundColor : "pink" ,
        flex: 10,
        marginBottom : 20,
        flexDirection:"row",
        padding:10
    },
    footer:{
        backgroundColor : "blue",
        flex: 1,
        flexDirection:"row",
        padding: 10
    },
    btn1 : { backgroundColor : "blue" , flex : 1 },
    btn2 : { backgroundColor : "yellow" , flex : 1 , marginHorizontal :10},
    btn3 : { backgroundColor : "purple" , flex :1 },
    article1 :{ backgroundColor : "blue" , flex : 1 , marginRight : 10},
    article2 :{ backgroundColor : "yellow" , flex : 1 },
    icone1 : {width : 50, backgroundColor : "#9b59b6" },
    icone2 : {width : 50, backgroundColor : "#3498db" , marginHorizontal :10},
    icone3 : {flex : 1, backgroundColor : "#2ecc71" },
    // https://flatuicolors.com/
})