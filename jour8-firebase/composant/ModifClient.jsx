import { StyleSheet, Text, View , TextInput , Button } from 'react-native'
import React , {useState} from 'react'
import { db } from '../config/firebase';
import { doc , updateDoc} from "firebase/firestore"
import * as Crypto from 'expo-crypto';

export default function ModifClient({item, setId , setUpdate}) {
    const [client, setClient] = useState(function(){
        delete item.password
        return item
    })

    function remplir(textSaisi , nom ){
        const cloneClient = {...client};
        cloneClient[nom] = textSaisi ;
        setClient(cloneClient);
    }

    function submit(id){
        // si le champ password est vide 
        if(!client.password){
            updateDoc(doc(db, "clients" , id ), client )
                    .then(function(){
                        setId("");
                        setClient({})
                        setUpdate(function(update){ return !update})
                        return 
                    })
            return 
        }

        // si le password est rempli 
        const regex =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
        if(client.password && !regex.test(client.password))
        {
            alert("le mot de passe doit contenir 8 lettres avec majsucule minuscule et chiffre")
            return
        }

        

        Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256,
            client.password
          ).then(function(password ){
            client.password = password 

            updateDoc(doc(db, "clients" , id ), client )
                    .then(function(){
                        setId("");
                        setClient({})
                        setUpdate(function(update){ return !update})
                    })
          })

    }

  return (
    <View>
      <Text>ModifClient</Text>
      <TextInput 
        placeholder='nom' 
        style={styles.input} 
        value={client.nom} 
        onChangeText={function(textSaisi){ remplir(textSaisi , "nom" ) }}
        />
      <TextInput 
        placeholder='email'  
        style={styles.input} 
        value={client.email}
        onChangeText={function(textSaisi){ remplir(textSaisi , "email" ) }}
        />
      <TextInput 
        placeholder='password laisser vide si vous ne voulez pas le modifier'  
        style={styles.input} 
        onChangeText={function(textSaisi){ remplir(textSaisi , "password" ) }}
        />
      <TextInput 
        placeholder='role'  
        style={styles.input} 
        value={client.role}
        onChangeText={function(textSaisi){ remplir(textSaisi , "role" ) }}
        />
      <Button title={"go"} onPress={function(){
        submit(client.id)
      }}  color={'green'} />
    </View>
  )
}

const styles = StyleSheet.create({
    input : { borderColor : "black" , borderWidth :1 , marginBottom : 20 , padding : 10 , borderRadius : 10 }
})