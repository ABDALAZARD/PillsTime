import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import api from "../../../service/api";
import styles from '../../../styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        onPress={() => {
          fetch('http://pillstime-api.test/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }}>
        <Text style={styles.textButton}>Logar</Text>
      </TouchableOpacity>   
    </View>
  );
};