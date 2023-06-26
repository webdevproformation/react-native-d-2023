import { StyleSheet, Text, View  , ImageBackground , Button , StatusBar } from 'react-native'
import React from 'react'

export default function Exo1() {
  return (
    <View style={{paddingHorizontal : 10 , marginTop : StatusBar.currentHeight }}>
      <Text style={{ fontSize : 25 }}>Exo1</Text>
      <ImageBackground source={{uri : "https://via.placeholder.com/400x200", width: 400 , height : 200 }} style={{ alignItems : "center" , justifyContent : "center"  , height : 200}}>
        <Button title={'action 1'} onPress={function(){}} />
      </ImageBackground>
      <Text>Etiam venenatis a leo a dignissim. Donec purus leo, venenatis in lobortis eget, mollis a felis. Aenean in est pretium, vestibulum magna vitae, feugiat ipsum. Suspendisse sapien lacus, pulvinar ut elementum vel, condimentum eget ligula. Suspendisse egestas neque nec tristique consequat. Donec non mauris sed mauris rhoncus placerat. Cras gravida erat non rhoncus dignissim. Curabitur ullamcorper felis quis sem pellentesque fringilla. Vivamus magna odio, dictum quis sem a, tempor viverra neque. Nulla porttitor et ex nec volutpat. </Text>
      <Text>Aenean maximus ligula viverra mollis tempor. In lorem risus, sagittis ut ullamcorper at, fringilla in magna. Donec ornare auctor mi. Aenean hendrerit est sit amet efficitur facilisis. Cras a urna eget turpis bibendum congue ac sed lorem. Sed dictum, dui feugiat scelerisque dictum, orci nibh consectetur enim, a tincidunt felis nisl at tortor. Aenean congue nunc nec condimentum dictum. Donec turpis enim, malesuada non augue ac, facilisis eleifend arcu. In in velit nisl. Maecenas tempor ante sed ipsum auctor tristique. Nulla venenatis hendrerit malesuada. </Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue ipsum elit, vel porta sem sodales in. Sed finibus ex nec nisl pulvinar, vitae pharetra massa interdum. Aliquam aliquet nulla id massa aliquam, quis tincidunt ex mattis. Proin elit lorem, bibendum non metus in, tincidunt rhoncus odio. Vivamus sit amet fringilla orci. Donec finibus convallis mi vitae malesuada. Fusce ultrices facilisis leo malesuada consequat. Mauris a sapien ante. Donec egestas ultrices est volutpat tempor. In cursus finibus lectus, in rhoncus sapien molestie nec. Cras sagittis in eros in pretium. </Text>
    </View>
  )
}

const styles = StyleSheet.create({})