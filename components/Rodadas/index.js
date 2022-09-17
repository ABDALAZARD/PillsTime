import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

import Title from '../Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar desafio</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.feedName}>Últimas rodadas Rodadas:</Text>
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
    backgroundColor: "#ffff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedName: {
    color: '#006200',
    fontSize: 17,
    marginBottom: 30,
  },
  matches: {
    color: "#006200",
    margin: 30,
  },
  button: {
    margin: 10,
    marginBottom: 30,
    padding: 10,
    backgroundColor: '#006200',
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#006200',
    fontSize: 12,
    margin: 10,
  },
  item: {
    color: '#006200',
    fontSize: 10,
    margin: 20,
    marginBottom: 10,
  }
});
