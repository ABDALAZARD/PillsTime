import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

import api from "../../../service/api";

import styles from '../../../styles';

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   async function handleSubmit() {
//     try {
//       const response = await api.post('api/login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       // redirecionar o usuário para a página principal aqui
//     } catch (e) {
//       // exibir uma mensagem de erro para o usuário aqui
//     }
//   }
// };

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PillsTime</Text>
      <View style={styles.card}>
        <View>
          <TextInput 
            style={styles.textCard}
            placeholder="Login"
          />
        </View>
        <View>
          <TextInput 
            style={styles.textCard}
            secureTextEntry
            placeholder="Insira sua senha aqui" 
          />
        </View>
        <Button
          style={styles.button}
          title="Entrar"
        /> 

        {/* <TouchableOpacity style={styles.button}
          onClick={handleSubmit}
        >
          <Text style={styles.textButton}>Logar</Text>
        </TouchableOpacity> */}
          
      </View>
    </View>
  );
};
