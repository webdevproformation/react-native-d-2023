import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MenuPrincipal from './composant/MenuPrincipal';
import { AuthContextProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthContextProvider>
      <View style={styles.container}>
        <MenuPrincipal />
        <StatusBar style="auto" />
      </View>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
