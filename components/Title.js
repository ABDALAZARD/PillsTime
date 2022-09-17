import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>FlagApp</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008000",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    color: "#ffff",
    fontSize: 22,
  }
});
