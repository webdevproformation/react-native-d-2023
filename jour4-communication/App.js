import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , StatusBar as S } from 'react-native';
import Compteur from './composants/Compteur';
import Separateur from './composants/Separateur';
import Exo1 from './composants/Exo1';
import Article from './composants/Article';

export default function App() {
  return (
    <View style={styles.container}>
      <Compteur />
      <Separateur />
      <Exo1 />
      <Separateur />
      <Article />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff' ,
    marginTop : S.currentHeight
  },
});
