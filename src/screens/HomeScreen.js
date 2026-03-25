import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Button onPress={() => navigation.navigate('Profile')}>Ver Desenvolvedores</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
});