import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from './src/screens/LoginScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { TarefasScreen } from './src/screens/TarefasScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Stack: navegação em "pilha" (uma tela em cima da outra). */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Início' }}
        />
        <Stack.Screen 
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Desenvolvedores' }}
        />
        <Stack.Screen
          name="Tarefas"
          component={TarefasScreen}
          options={{ title: 'Tarefas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
