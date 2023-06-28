import { StyleSheet, Text, View , TextInput , TouchableOpacity  } from 'react-native'
import React , {useState} from 'react'
import { db } from '../config/firebase'
import { addDoc , collection } from "firebase/firestore"

export default function AjouterArticle() {

    const [article, setArticle] = useState({ titre : "" , contenu : "" })
    const [message , setMessage] = useState(false);

    function submit(){
        addDoc(collection(db, "articles"), article )
            .then(function(){
                setMessage(true);
                setTimeout(function(){
                    setMessage(false);
                } , 1500)
                setArticle({ titre : "" , contenu : "" })
            })
    }
    /* fetch("https:// .... cocktail.php")
        .then() */

   function remplir( t , nom ){
    const cloneArticle = {...article};
    cloneArticle[nom] = t ;
    setArticle(cloneArticle)
   }
  return (
    <View style={styles.box}>
      <Text>AjouterArticle</Text>
      <TextInput placeholder='titre' style={styles.input} onChangeText={function(texteSaisi){ remplir(texteSaisi , "titre") }} value={article.titre} />
      <TextInput placeholder='contenu' style={styles.input} 
        multiline={true} numberOfLines={5}
        value={article.contenu} onChangeText={function(textSaisi){ remplir(textSaisi , "contenu") }}
        />
      <TouchableOpacity style={styles.boxBtn} onPress={submit}>
            <Text style={styles.btn}>ajouter</Text>
      </TouchableOpacity>
      {message && <View>
        <Text style={ styles.success }>Article enregistré dans Firebase</Text>
    </View>}
    </View>
  )
}
const styles = StyleSheet.create({
    success : { padding : 10 , backgroundColor : "green" , textAlign : "center", marginTop : 20  }, 
    box : { marginHorizontal : 20 },
    input : { borderColor : "black" , borderWidth : 1 , padding : 10 , marginBottom : 10 , borderRadius : 10 },
    boxBtn : { flexDirection : "row" , justifyContent : "center"},
    btn : { backgroundColor : "red" , padding : 10 , width : "50%" , borderRadius : 10 , textAlign : "center" , fontSize : 22 }
})