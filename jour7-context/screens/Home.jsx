import { StyleSheet, Text, View } from 'react-native'
import React , {useContext} from 'react'
import { ArticleContext } from '../context/ArticleContext'
import { ScrollView } from 'react-native'

export default function Home() {
  const {articles} = useContext(ArticleContext)
  return (
    <View>    
        <ScrollView>
        {articles.map(function(item, key){
          return <View key={key} style={{marginBottom : 20}}> 
            <Text style={{ fontSize : 25  }}>{ item.titre}</Text>
            <Text>{ item.contenu}</Text>
          </View>
        })}
        </ScrollView>
     
    </View>
  )
}

const styles = StyleSheet.create({})