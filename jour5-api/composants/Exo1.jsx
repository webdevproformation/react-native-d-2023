import { StyleSheet, Text, View , ActivityIndicator } from 'react-native'
import React , {useState , useEffect} from 'react'
import User from './User'

export default function Exo1() {
    const [user, setUser] = useState({})
    useEffect( function(){
        fetch("https://jsonplaceholder.typicode.com/users/4")
            .then(function(reponse ){ return reponse.json()})
            .then(function(data){  setUser(data) })
    } , [])
  return (
    <View>
      <Text>Exo1</Text>
      { Object.keys(user).length === 0  
      ?
        <ActivityIndicator />
      :
        <User user={user} />
        }
    </View>
  )
}

const styles = StyleSheet.create({})