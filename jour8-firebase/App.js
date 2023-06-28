import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

import AjouterArticle from './screens/AjouterArticle';
import ListeArticle from './screens/ListeArticle';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name={'ajouter-article'} component={AjouterArticle} />
          <Drawer.Screen name={'liste-article'} component={ListeArticle} />
        </Drawer.Navigator>
      </NavigationContainer>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
