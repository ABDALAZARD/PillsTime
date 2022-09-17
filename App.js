import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Inicio from './components/Inicio/index';
import Rodadas from './components/Rodadas/index';
import Settings from './components/Settings/index';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator initialRouteName="Inicio">
        <Tab.Screen  name="Inicio"  style={styles.screenButton}
          component={Inicio} 
          options={{headerShown: false,
          tabBarInactiveBackgroundColor:"#fff",
          tabBarInactiveTintColor: "#006200",
          tabBarActiveBackgroundColor:'#006200',
          tabBarActiveTintColor: '#fff',
          }}
        />
        <Tab.Screen  name="Rodadas" style={styles.screenButton}
          component={Rodadas} 
          options={{headerShown: false,
            tabBarInactiveBackgroundColor:"#fff",
          tabBarInactiveTintColor: "#006200",
          tabBarActiveBackgroundColor:'#006200',
          tabBarActiveTintColor: '#fff',
          }}
        />
        <Tab.Screen  name="Settings" style={styles.screenButton}
          component={Settings} 
          options={{headerShown: false,
          tabBarInactiveBackgroundColor:"#fff",
          tabBarInactiveTintColor: "#006200",
          tabBarActiveBackgroundColor:'#006200',
          tabBarActiveTintColor: '#fff',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenButton: {
    backgroundColor: "#006200",
    color: "#ffff",
    textAlign: 'center',
  }
})
