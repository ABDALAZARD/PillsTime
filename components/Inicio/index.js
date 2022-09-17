import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import Title from '../Title';

export default function App() {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.container}>
        <View name="form" style={styles.card}>
          <View name="emailForm">
            <TextInput
              style={styles.inputButtom}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email"
              />
          </View>

          <View name="passwordForm">
            <TextInput
              style={styles.inputButtom}
              onChangeText={onChangePassword}
              value={password}
              placeholder="********"
              />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#006200",   
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#006200',
  },
  inputButtom: {
    borderRadius: 20,
    height: 40,
    width: 200,
    marginBottom: 40,
    backgroundColor: '#ffff',
    color: "#006200",
    margin: 10,
    textAlign: 'center',
  },
  
});
