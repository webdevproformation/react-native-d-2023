import {View, Text} from "react-native"

export default function Cinquieme(){
    const arbres = ["chêne", "bambou" , "pommier" , "poirier"] ;
    // je souhaite afficher dans la vue du composant chaque valeur stockées dans la variable arbres 
    // boucle => forEach()
    // spécial React .map
    return (
        <View>
            { arbres.map(function(item, key){
                return <Text key={key}>{item}</Text>
            }) }
        </View>
    )
}