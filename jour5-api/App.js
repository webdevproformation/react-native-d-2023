import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,StatusBar as S } from 'react-native';
import CycleVie from './composants/CycleVie';
import ApiGameOfThrone from './composants/ApiGameOfThrone';
import Exo1 from './composants/Exo1';
import Recherche from './composants/Recherche';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CycleVie />
      <ApiGameOfThrone />
      <Exo1 /> */}
      <Recherche />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : S.currentHeight,
    paddingHorizontal : 20
  },
});
