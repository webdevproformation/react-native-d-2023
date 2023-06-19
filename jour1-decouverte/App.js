import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Premier from "./composants/Premier"
import Deuxieme from './composants/Deuxieme';
import Troisieme from './composants/Troisieme';
import Quatrieme from './composants/Quatrieme';
import Cinquieme from './composants/Cinquieme';

export default function App() {
  // code
  // code
  // code
  // code

  // bon appétit 13h40 !!! 
  return (
    <View style={styles.container}>
      <Cinquieme />
      <Quatrieme />
      <Troisieme />
      <Text>autre test</Text>
      <Premier />
      <Deuxieme />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
