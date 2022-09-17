import { StyleSheet,View } from 'react-native';
import { TextInput } from 'react-native-web';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.form}>
            <TextInput>

            </TextInput>

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
})
