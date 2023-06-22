import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , StatusBar as S  , ScrollView} from 'react-native';
import Compteur from './composants/Compteur';
import Separateur from './composants/Separateur';
import Exo1 from './composants/Exo1';
import Article from './composants/Article';
import Exo2 from './composants/Exo2';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Compteur />
        <Separateur />
        <Exo1 />
        <Separateur />
        <Article />
        <Separateur />
        <Exo2 />
      </ScrollView>
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
