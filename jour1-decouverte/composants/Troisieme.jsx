import { View , Text } from "react-native"


export default function Troisieme(){
    const texte1 = "premier texte modifié";
    const texte2 = "deuxieme texte" ;
    const chiffre1 = 10 ;
    const chiffre2 = 2 ; 
    const fleurs = ["rose" , "tulipe" , "jasmin"]
    const chiffreAleatoire = Math.ceil(Math.random() * 10)
    const etudiant = {
        nom : "Alain",
        age : 22 ,
        adresse : {
            rue : "75 rue de Paris",
            ville : "Marseille",
            cp : 13000
        }
    }
    function destination(){
        return "je vais à Lille";
    }
    /**
     * npx create-expo-app --template
     * jour1-decouverte
     * cd my-app
     * npm start 
     */
    return ( 
        <>  
            <Text>{ destination()} </Text>
            {/** écrire un commentaire dans la partie jsx du composant */}
            <Text>{ etudiant.nom } habite au {etudiant.adresse.rue}</Text>
            <Text>{ `${etudiant.nom} habite au ${etudiant.adresse.rue}`}</Text>
            <Text>un peu de texte {"\n"} saut ligne</Text>
            <Text>{etudiant.nom}  habite à  {etudiant.adresse.rue} à {etudiant.adresse.ville}</Text>
            <Text>{ texte1 }</Text>
            <Text>{ texte2 }</Text>
            <Text> { chiffre1 * chiffre2 } </Text>
            <Text> { fleurs[2] } </Text>
            <Text>{ chiffreAleatoire }</Text>
            <Text>{ texte1.toUpperCase() }</Text>
        </>
    )
}