import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Title from './components/Title';
import Inicio from './components/Inicio/index';
import Rodadas from './components/Rodadas/index';
import Settings from './components/Settings/index';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Title />
      <Tab.Navigator initialRouteName="Inicio">
        <Tab.Screen  name="Inicio"  style={styles.screenButton}
          component={Inicio} 
          options={{headerShown: false,
          tabBarInactiveBackgroundColor:"#008000",
          tabBarInactiveTintColor: "#fff",
          tabBarActiveBackgroundColor:'#fff',
          tabBarActiveTintColor: '#008000',
          }}
        />
        <Tab.Screen  name="Rodadas" style={styles.screenButton}
          component={Rodadas} 
          options={{headerShown: false,
          tabBarInactiveBackgroundColor:"#008000",
          tabBarInactiveTintColor: "white",
          tabBarActiveBackgroundColor:'#fff',
          tabBarActiveTintColor: '#008000',
          }}
        />
        <Tab.Screen  name="Settings" style={styles.screenButton}
          component={Settings} 
          options={{headerShown: false,
          tabBarInactiveBackgroundColor:"#008000",
          tabBarInactiveTintColor: "#fff",
          tabBarActiveBackgroundColor:'#fff',
          tabBarActiveTintColor: '#008000',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008000",
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenButton: {
    backgroundColor: "#008000",
    color: "#ffff",
  }
})
