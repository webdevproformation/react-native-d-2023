import {  View } from 'react-native'
import React , {useState} from 'react'
import AjouterLivre from "../composant/AjouterLivre"
import ListeLivre from "../composant/ListeLivre"

export default function Exo3() {
  const [update, setUpdate] = useState(true)
  return (
    <View style={{ marginHorizontal : 20 , flex: 1}}>
      <AjouterLivre setUpdate={setUpdate}/>
      <ListeLivre update={update} setUpdate={setUpdate}/>
    </View>
  )
}