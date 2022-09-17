import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import Title from '../Title';
import styles from '../style';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Criar desafio</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Últimas rodadas Rodadas:</Text>
      <FlatList
        data={[
          {key: 'Teste A'},
          {key: 'Teste B'},
        ]}
        renderItem={({item}) => <Text style={styles.itemList}>{item.key}
        </Text>}
         />
    </View>
  );
}

