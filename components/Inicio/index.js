import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import Title from '../Title';
import styles from '../style';

export default function App() {
  const [name, setName] = useState('');

  onPress = () => {
    this.name = setName;
  }
  return (
    <View style={styles.container}>
      <Title />
      <Text style={styles.text}>{{name}}</Text>
      <TextInput placeholder="Digite seu nome" onChangeText={setName}
        value={{name}}/>
      <TouchableOpacity style={styles.button} onPress={() => onPress}>
        <Text style={styles.textButton}>Gravar nome</Text>
      </TouchableOpacity>
    </View>
  );
};