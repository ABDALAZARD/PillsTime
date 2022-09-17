import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar desafio</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Últimas rodadas Rodadas:</Text>
      <FlatList
        data={[
          {key: 'Teste A'},
          {key: 'Teste B'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}
        </Text>}
         />
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
    color: '#fff',
    fontSize: 17,
    marginBottom: 30,
  },
  matches: {
    color: "#ffff",
    margin: 30,
  },
  button: {
    margin: 10,
    marginBottom: 30,
    padding: 10,
    backgroundColor: '#006200',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 12,
    margin: 10,
  },
  item: {
    color: 'white',
    fontSize: 10,
    margin: 20,
    marginBottom: 10,
  }
});
