import { StyleSheet, View } from 'react-native'

export default function Separateur() {
  return (
    <View style={styles.sep}></View>
  )
}

const styles = StyleSheet.create({
    sep : {
        borderBottomColor : "black",
        borderBottomWidth : 2 ,
        marginVertical : 10
    }
})