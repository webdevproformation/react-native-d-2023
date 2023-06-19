//rnfs
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Neuvieme() {
    const etudiants = [
        { nom : "Alain", role : "admin" },
        { nom : "Benoit", role : "redacteur" },
        { nom : "Céline", role : "admin" }
    ];
return (
    <View>
        {etudiants.map(function(item , key){
                return item.role === "admin"
                    ? 
                    <Text key={key}>{ item.nom } peut gérer le site</Text>
                    :
                    <Text key={key}>{ item.nom } ne peut pas accéder à la gestion du site </Text>
            })
        }
    </View>
)
}

const styles = StyleSheet.create({})