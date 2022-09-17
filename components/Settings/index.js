import React from 'react';
import { View, Text, } from 'react-native';

import Title from '../Title';
import styles from '../style';

export default function App() {
  return (
    <View style={styles.container}>
        <Title />
        <Text style={styles.subTitle}>Configurações</Text>
    </View>
  );
};