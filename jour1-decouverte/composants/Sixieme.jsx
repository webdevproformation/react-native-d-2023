import {View , Text} from "react-native"

export default function Sixieme(){

    const formation= ["js", "node", "angular", "react", "jquery"];

    return (
        <View>
            { formation.map( function ( item , key ){
                return <Text key={key}>{ item }</Text>
            }) }
        </View>
    )
}