import { React } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import styles from './../../../styles';

// function handleLoginButton() {

// }

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <TextInput style={styles.textCard}
            placeholder="Login"
          />
        </View>
        <View>
          <TextInput style={styles.textCard}
            secureTextEntry
            placeholder="Insira sua senha aqui" 
          />
        </View>
        {/* <TouchableOpacity style={styles.button}
          onClick={handleLoginButton}
        >
          <Text style={styles.textButton}>Logar</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
