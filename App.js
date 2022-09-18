import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import styles from './styles';

import Login from './src/pages/Login'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content" /> 
        <Login />
    </SafeAreaView>
  );
};
