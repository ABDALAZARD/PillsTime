import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import styles from './styles';
import Login from './src/pages/Login/index';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>PillsTime</Text>
        <Login />
    </SafeAreaView>
  );
};
