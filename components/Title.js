import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
        <Text style={styles.title}>FlagApp</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#ffff",
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 30,
    marginTop: 20,
  }
});
