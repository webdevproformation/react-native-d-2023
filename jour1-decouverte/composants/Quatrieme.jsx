import {View, Text} from "react-native"

export default function Quatrieme(){
    const data = [
        { id : 1 , titre : "article 1", auteur : "Victor Hugo"},
        { id : 2 , titre : "article 2", auteur : "George Sand"},
    ]; 

    return (
        <View>
            <Text>{ data[0].auteur } a écrit l'article numéro { data[0].id }</Text>
            <Text>{ data[1].auteur } est l'auteure de { data[1].titre }</Text>
        </View>
    )
}