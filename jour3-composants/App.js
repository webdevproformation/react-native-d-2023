import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , StatusBar as S } from 'react-native';
import LeText from './composants/LeText';

export default function App() {
  return (
    <View style={styles.container}>
      <LeText />
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
