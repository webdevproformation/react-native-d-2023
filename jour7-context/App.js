import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MenuPrincipal from './composant/MenuPrincipal';
import { AuthContextProvider } from './context/AuthContext';
import { ArticleContextProvider } from './context/ArticleContext';

export default function App() {
  return (
    <ArticleContextProvider>
      <AuthContextProvider>
        <View style={styles.container}>
          <MenuPrincipal />
          <StatusBar style="auto" />
        </View>
      </AuthContextProvider>
    </ArticleContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
});
