import { Text , StyleSheet } from "react-native"

export default function Deuxieme(){
    return <Text style={styleText.p}>je sais créer un composant manuellement</Text>
}

const styleText = StyleSheet.create({
    p : {
        color : "red"
    }
})