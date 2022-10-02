import { React } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.textCard}>Login</Text>       
        <TouchableOpacity style={styles.button}
          onClick={handleLoginButton}>
          <Text style={styles.textButton}>Logar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
