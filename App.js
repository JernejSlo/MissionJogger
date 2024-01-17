import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from "./Pages/Dashboard";

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard
          username="Katja Novak"
          location="Ljubljana, Slovenija"
          activities={[
            { id: 1, name: 'BH FITNESS RS900' },
            { id: 2, name: 'MISSION JOGGER' },
          ]}
          rank={33}
          connections={[
            { id: 1, name: 'Apple TV' },
          ]}
      />
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
