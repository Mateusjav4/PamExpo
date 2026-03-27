import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export function ProfileScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#fff' }}
      contentContainerStyle={styles.container}
    >
    <Text style={styles.titulo}>Desenvolvedores</Text>

 <View style={styles.grade}>

  <View style={styles.cartao}>
    <Image source={require('../../imgs/matt.png')} style={styles.imagem} />
    <View style={styles.info}>
      <Text style={styles.nome}>Mateus Ribeiro</Text>
      <Text style={styles.funcao}>Fullstack</Text>
    </View>
  </View>

  <View style={styles.cartao}>
    <Image source={require('../../imgs/goat.jpeg')} style={styles.imagem} />
    <View style={styles.info}>
      <Text style={styles.nome}>Emanuel Almeida</Text>
      <Text style={styles.funcao}>Frontend</Text>
    </View>
  </View>

  <View style={styles.cartao}>
    <Image source={require('../../imgs/rodo.png')} style={styles.imagem} />
    <View style={styles.info}>
      <Text style={styles.nome}>Rodolfo Faria</Text>
      <Text style={styles.funcao}>Backend</Text>
    </View>
  </View>

  <View style={styles.cartao}>
    <Image source={require('../../imgs/gui.jpeg')} style={styles.imagem} />
    <View style={styles.info}>
      <Text style={styles.nome}>Guilherme Enrique</Text>
      <Text style={styles.funcao}>UI/UX</Text>
    </View>
  </View>

  <View style={styles.cartao}>
    <Image source={require('../../imgs/gustas.png')} style={styles.imagem} />
    <View style={styles.info}>
      <Text style={styles.nome}>Gustavo Santos</Text>
      <Text style={styles.funcao}>QA</Text>
    </View>
  </View>
</View>
    </ScrollView>
  );
  
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
},

  titulo: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },

grade: {
  width: '100%',
},

cartao: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 15,
  padding: 15,
  borderRadius: 16,
  backgroundColor: '#fff',
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 2 },
},

imagem: {
  width: 70,
  height: 70,
  borderRadius: 14,
},

info: {
  marginLeft: 15,
},

nome: {
  fontSize: 16,
  fontWeight: '700',
  color: '#222',
},

funcao: {
  fontSize: 13,
  color: '#777',
  marginTop: 2,
},
});