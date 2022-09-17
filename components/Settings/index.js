import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Configurações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008000",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#ffff",
    
  }

});
