import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , StatusBar as S , ScrollView } from 'react-native';
import LeText from './composants/LeText';
import Separateur from './composants/Separateur';
import LesImages from './composants/LesImages';
import Exo1 from './composants/Exo1';
import Liste from './composants/Liste';
import Exo2 from './composants/Exo2';
import Formulaire from './composants/Formulaire';
import Exo3 from './composants/Exo3';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <LeText />
        <Separateur />
        <LesImages />
        <Separateur />
        <Exo1 />
        <Separateur />
        <Formulaire />
        <Separateur />
        <Exo3 />
      </ScrollView>
      <Liste />
      <Exo2 />
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
