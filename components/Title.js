import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View>
        <Text style={styles.title}>FlagApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#006200",
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 30,
    marginTop: 20,
  }
});
