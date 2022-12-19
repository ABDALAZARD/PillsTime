import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import api from "../../../service/api";
import styles from '../../../styles';

export function loginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await api.post('api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      // redirecionar o usuário para a página principal aqui
    } catch (e) {
      console.error(e);
      alert('Ocorreu um erro ao fazer login. Por favor, verifique seu email e senha e tente novamente.');
    }
  }

};

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PillsTime</Text>
      <View style={styles.card}>
        <TextInput 
          style={styles.textInput}
          placeholder="Login"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.card}>
        <TextInput 
          style={styles.textInput}
          secureTextEntry
          placeholder="Insira sua senha aqui"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.button}
        onPress={handleSubmit}>
        <Text style={styles.textButton}>Logar</Text>
      </TouchableOpacity>   
    </View>
  );
};