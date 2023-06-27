import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuPrincipal from './composant/MenuPrincipal';

export default function App() {
  return (
    <View style={styles.container}>
      <MenuPrincipal />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
