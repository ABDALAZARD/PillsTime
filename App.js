import React from 'react';
import { SafeAreaView, Text, } from 'react-native';

import styles from './styles';
import Login from './src/pages/Login/Login';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Login />
    </SafeAreaView>
  );
};
