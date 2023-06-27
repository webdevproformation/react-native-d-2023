import { StyleSheet, Text, View , Button } from 'react-native'
import React , {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import FormulaireAddArticle from '../composant/FormulaireAddArticle'

export default function Profil() {
  const {logout} = useContext(AuthContext)
  return (
    <View>
      <Text>Profil</Text>
      <View style={{alignItems: "center"}}>
        <Button title={'deconnexion'} onPress={function(){
          logout()
        }} />
      </View>
      <FormulaireAddArticle />
    </View>
  )
}

const styles = StyleSheet.create({})