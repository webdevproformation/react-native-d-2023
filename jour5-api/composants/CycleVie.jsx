import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function CycleVie() {

    // hook 
    // useEffect prendre 2 valeurs 
    // fonction anonyme  => mettre des traitements dedans => requête ajax
    // tableau  => si il est vide => je dois exécuter le traitement QUE Mounted 
    useEffect(function(){  }, [] )

    const variable = 0 ;
    // si tableau contient une variable => la phase d'UPDATE 
    // exécuter le traitement autant de fois que la valeur stockée dans la variable est modifiée
    useEffect(function(){  }, [variable] )

    // si le traitement retourne un fonction et que la tableau est vide 
    // je veux effectuer un traitement au moment où le composant est supprimé de l'affichage
    // phase Unmounted 
    useEffect(function(){ 
        return function(){ }
    } , []) 


  return (
    <View>
      <Text>CycleVie</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
// cycle de vie des composants 
// on distingue 3 étapes dans le cycle de vie du composant 
// phase Mounted    (monté)      => il finit de s'afficher à l'écran 
// phase Update     (mis à jour) => lorsque le state ou une prod du composant est modifié
// phase UnMounted  (démonté)    => le composant est supprimé de l'écran 

// il est possible d'exécuter des traitements à chaque étape du cycle de vie du composant 
// via le hook useEffect 
// ecouteur d'évènement au niveau du composant 
// requête vers des API (requêtes AJAX ) vont être réalisées dans la phase de montage 