import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import Title from '../Title';

export default function App() {
  return (
    <View style={styles.container}>
        <Title />
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
