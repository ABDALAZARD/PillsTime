import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('******');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.textCard}>Login</Text>
        <TextInput name="email"
            keyboardType='email-address'
            placeholder='Digite seu email'
            placeholderTextColor='#38A69D'
            style={styles.textInput}
          />
        <TextInput name="senha"
          keyboardType='visible-password'
          placeholder='Digite sua senha'
          placeholderTextColor='#38A69D'
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Logar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
