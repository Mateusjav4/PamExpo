import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export function ProfileScreen() {
 return (
  <View style={styles.container}>
    <Text style={styles.title}>Desenvolvedores</Text>

    <View style={styles.fila}>
      <Image source={require('../../imgs/gustas.png')} style={styles.image} />
      <Image source={require('../../imgs/matt.png')} style={styles.image} />
      <Image source={require('../../imgs/rodo.png')} style={styles.image} />
      <Image source={require('../../imgs/gui.jpeg')} style={styles.image} />
      <View style={styles.centerImage}>
        <Image source={require('../../imgs/goat.jpeg')} style={styles.image} />
      </View>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
  },
  fila: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    margin: 10,
    borderRadius: 10,
  },
  centerImage: {
    width: '100%',
    alignItems: 'center',
  },
});