import {View, Text} from "react-native"

// if en jsx 
export default function Septieme(){

    const user = { // opacité plus claire => 
                // disponible mais pas utilisé
        nom : "Alain",
        role : "admin"
    }
    // si le user est admin => afficher le texte "Bienvenue Alain"
    // sinon => afficher le texte "vous devez être admin pour voir le texte"
    return (
        <View>
            { 
                user.role === "admin" 
                ? 
                <Text>Bienvenue {user.nom}</Text>  
                :
                <Text>vous devez être admin pour voir le texte</Text>
            }
        </View>
    )
}