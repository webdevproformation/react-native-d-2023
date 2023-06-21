// rnfs
import { StyleSheet, Text, View , Image , Dimensions , ImageBackground } from 'react-native'
import React from 'react'

export default function LesImages() {
    const a = "abonne"
  return (
    <View>
      <Text>LesImages</Text>
      <Text>l'image est stockée sur internet</Text>
      {/** uri ET ne pas oublié les props width et height */}
      <Image source={{ uri : "https://via.placeholder.com/300x100" , width: 300 , height : 100 }}/>
      <Text>l'image stockée dans votre application</Text>
      {/** si c'est une image DANS le dossier assets => require ET la fonction require donne les dimensions de l'image pas besoin de les mentionner dans le composant */}
      <Image source={require("../assets/favicon.png")}/>
      <Image source={require("../assets/images/logo.jpg")} style={styles.logo}/>
      <Image 
        source={require("../assets/images/paysage.jpg")} 
        style={styles.paysage}
        resizeMode={'cover'}
        blurRadius={ a === "abonne" ? 0 : 20 }
        alt={'paysage'}
        fadeDuration={ 2000 } 
        />
        <ImageBackground source={require("../assets/images/paysage.jpg")} style={styles.paysage2}>
            <Text style={styles.paysage2Text}>un peu de texte</Text>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    logo : {
        width:50,
        height :50
    },
    paysage : {
        width : Dimensions.get("window").width - 40 ,
        height : 150
    },
    paysage2: {
        width : Dimensions.get("window").width - 40 ,
        height : 150,   
        alignItems: "center",
        justifyContent : "center"
    },
    paysage2Text : { color : "white" , fontSize : 20 }
})