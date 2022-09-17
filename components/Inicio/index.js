import React from 'react';
import { View, TextInput } from 'react-native';

import Title from '../Title';
import styles from '../style';

export default function App() {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.card}>
        <View name="form" >
          <TextInput
            keyboardType='email-address'
            style={styles.inputButtom}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
            />

          <TextInput
            keyboardType='visible-password'
            style={styles.inputButtom}
            onChangeText={onChangePassword}
            value={password}
            placeholder="********"
            />
        </View>
      </View>
    </View>
  );
};