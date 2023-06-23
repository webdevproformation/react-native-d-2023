import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React from 'react'

export default function User({user}) {
  return (
    <View>
            <Text>nom complet : {user.name} </Text>
            <Text>email : {user.email}</Text>
            <Text>téléphone : {user.phone}</Text>
            <Text>adresse : {user.address.street} {user.address.zipcode} {user.address.city}</Text>
            {/** remarque pour Mehdi ! */}
            <View style={{  flexDirection : "row"}}>
                <ScrollView horizontal={true}>
                    { Object.values(user.address).map(function(item, key){
                        return <Text key={key}>{JSON.stringify(item)} </Text>
                    }) }
                </ScrollView>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({})