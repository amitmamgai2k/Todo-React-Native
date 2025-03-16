
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/HomeScreen';

export default function App() {
  return (

    <View style={styles.container}>

      <HomeScreen />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',


  },
});
