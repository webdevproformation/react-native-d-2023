import { StyleSheet, Text, View , Image , Dimensions ,Button } from 'react-native'
import React from 'react'

export default function MentionLegale({navigation}) {
  return (
    <View style={{padding : 10}}>
      <Text style={{fontSize : 25}}>MentionLegale</Text>
      <Button title={'revenir en arrière'} onPress={function(){
        navigation.goBack();
      }} />
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non eleifend eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris lacus mi, interdum quis erat et, condimentum convallis neque. Etiam quis nibh sed eros aliquet scelerisque nec in enim. Fusce rhoncus ullamcorper magna at hendrerit. Quisque in magna condimentum, lacinia turpis quis, dapibus nunc. Mauris porta purus turpis, a pharetra erat commodo ut. Vestibulum lacus nunc, venenatis eu neque ut, consectetur lobortis nibh. Donec mattis ante vel massa rhoncus volutpat non ut nulla. Cras molestie purus sit amet ante cursus, vitae varius magna tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum quis ullamcorper ex. Nam pellentesque, libero id faucibus sagittis, magna lorem fringilla quam, rhoncus posuere elit tellus sed sapien. Nam dolor sem, ornare ac vulputate eu, ultricies in metus. Proin nisl ligula, malesuada ac porttitor eu, condimentum at lacus. </Text>
      <Image source={{ 
          uri : "https://via.placeholder.com/400x200" , 
          width : Dimensions.get("window").width - 20 , 
          height: 200  }} style={{ marginVertical : 20 }}/>
      <Text>Ut accumsan est in mauris egestas vehicula. Morbi varius sed mauris nec cursus. Aenean iaculis ipsum vel dolor pharetra, at faucibus libero lobortis. Aenean vel neque non dolor placerat dictum in et erat. Aenean venenatis ornare accumsan. Nulla porttitor tellus in orci varius egestas. Curabitur auctor velit in imperdiet molestie. Aenean at ipsum ex. Nam lacinia erat id lectus eleifend fermentum. Ut sit amet aliquet felis, ac condimentum est. </Text>
    </View>
  )
}

const styles = StyleSheet.create({})