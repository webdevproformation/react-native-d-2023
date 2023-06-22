import { StyleSheet, Text, View , Button } from 'react-native'
import React , { useState } from 'react' // importer le hook useState
export default function Compteur() {
   // let a = 10 ;
    const [a, setA] = useState(10) // remplace la variable a par le state a
    const [text , setText] = useState("liker")
    const [btnBg, setBtnBg] = useState("blue")
    function btnSpecial(){
        if(text === "liker"){
            setA( a + 1 )
            setText("déliker")
            setBtnBg("red")
        }else {
            setA( a - 1 )
            setText("liker")
            setBtnBg("blue")
        }
    }
  return (
    <View>
      <Text style={styles.titre}>Compteur </Text>
      <Text>{a}</Text>
      <Button title={'Augmenter de + 1'} onPress={ function() { setA( a + 1 ) }}/>
      <Button title={'Augmenter de - 1'} onPress={ function() { setA( a - 1 ) }}/>
      <Button title={'zero'} onPress={ function() { setA( 0 ) }}/>
      <Button title={ text } color={btnBg} onPress={ btnSpecial }/>
    </View>
  )
}

const styles = StyleSheet.create({
    titre : { fontSize : 25 }
})