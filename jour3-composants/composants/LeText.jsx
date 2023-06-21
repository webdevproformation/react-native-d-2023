// rnfs
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
export default function LeText() {
  return (
    <View>
      <Text style={styles.titre}>Titre</Text>
      <Text style={styles.p}>un paragraphe</Text>
      <Text style={styles.note}>note de bas de page</Text>
      <Text numberOfLines={4} 
        ellipsizeMode={'tail'}
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean est magna, pellentesque eu nunc ut, malesuada tristique dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris tempor orci venenatis suscipit dictum. Nullam facilisis, lectus in efficitur egestas, mauris neque blandit sem, sit amet ullamcorper nulla neque quis quam. Nunc euismod nunc quis ligula interdum pulvinar. Mauris dictum ex nec lacinia imperdiet. Suspendisse non tortor mi. Donec tempor congue ligula eu dapibus. Fusce nec efficitur neque, id luctus orci. Sed feugiat tortor magna, sed condimentum odio pulvinar sed. Quisque fringilla est eget cursus faucibus. Duis quis tellus vel neque aliquam sagittis. Morbi id nibh eu metus sodales varius. Aenean eu consectetur metus. </Text>
      <Text>text avec {"\n"} saut de ligne</Text>
      <View style={styles.zone}>
        <Text style={styles.droiteHaut}>tutu</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    titre : { fontSize : 30 },
    p : { fontSize : 16 } ,
    note : { fontSize : 8 },
    zone :{
        /* flexDirection :  "row",
        justifyContent : "flex-end" */
        position: "relative"
    },
    droiteHaut: {
        position : "absolute",
        right : 0,
        top : 0
    }
})