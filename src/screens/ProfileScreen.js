import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';

export function ProfileScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#fff' }}
      contentContainerStyle={styles.container}
    >
  <View style={styles.header}>
    <Text style={styles.titulo}>Desenvolvedores</Text>
  </View>

 <View style={styles.grade}>

<View style={styles.cartao}>
  <Image source={require('../../imgs/matt.png')} style={styles.imagem} />

  <View style={styles.info}>
    <Text style={styles.nome}>Mateus Ribeiro</Text>
    <Text style={styles.funcao}>Fullstack</Text>

    <TouchableOpacity
      style={styles.github}
      onPress={() => Linking.openURL('https://github.com/Mateusjav4')}
    >
      <Image
        source={require('../../imgs/github.png')}
        style={styles.githubIcon}
      />
      <Text style={styles.githubText}>GitHub</Text>
    </TouchableOpacity>
  </View>
</View>

<View style={styles.cartao}>
  <Image source={require('../../imgs/goat.jpeg')} style={styles.imagem} />

  <View style={styles.info}>
    <Text style={styles.nome}>Emanuel Almeida</Text>
    <Text style={styles.funcao}>Frontend</Text>

    <TouchableOpacity
      style={styles.github}
      onPress={() => Linking.openURL('https://github.com/EmanuelJS001')}
    >
      <Image
        source={require('../../imgs/github.png')}
        style={styles.githubIcon}
      />
      <Text style={styles.githubText}>GitHub</Text>
    </TouchableOpacity>
  </View>
</View>

<View style={styles.cartao}>
  <Image source={require('../../imgs/rodo.png')} style={styles.imagem} />

  <View style={styles.info}>
    <Text style={styles.nome}>Rodolfo Faria</Text>
    <Text style={styles.funcao}>Backend</Text>

    <TouchableOpacity
      style={styles.github}
      onPress={() => Linking.openURL('https://github.com/RoSJr-16')}
    >
      <Image
        source={require('../../imgs/github.png')}
        style={styles.githubIcon}
      />
      <Text style={styles.githubText}>GitHub</Text>
    </TouchableOpacity>
  </View>
</View>

<View style={styles.cartao}>
  <Image source={require('../../imgs/gui.jpeg')} style={styles.imagem} />

  <View style={styles.info}>
    <Text style={styles.nome}>Guilherme Enrique (sem h)</Text>
    <Text style={styles.funcao}>UI/UX</Text>

    <TouchableOpacity
      style={styles.github}
      onPress={() => Linking.openURL('https://github.com/GUIePABLO')}
    >
      <Image
        source={require('../../imgs/github.png')}
        style={styles.githubIcon}
      />
      <Text style={styles.githubText}>GitHub</Text>
    </TouchableOpacity>
  </View>
</View>

<View style={styles.cartao}>
  <Image source={require('../../imgs/gustas.png')} style={styles.imagem} />

  <View style={styles.info}>
    <Text style={styles.nome}>Gustavo Santos</Text>
    <Text style={styles.funcao}>QA</Text>

    <TouchableOpacity
      style={styles.github}
      onPress={() => Linking.openURL('https://github.com/GustavoSantosMello')}
    >
      <Image
        source={require('../../imgs/github.png')}
        style={styles.githubIcon}
      />
      <Text style={styles.githubText}>GitHub</Text>
    </TouchableOpacity>
  </View>
</View>

</View>
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },

  // HEADER PADRÃO
  header: {
    backgroundColor: '#4A90E2',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },

  grade: {
    width: '100%',
  },

  cartao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 4,
  },

  imagem: {
    width: 65,
    height: 65,
    borderRadius: 14,
  },

  info: {
    marginLeft: 15,
    flex: 1,
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
    marginBottom: 8,
  },

  // 🔹 GITHUB LINK
  github: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  githubIcon: {
    width: 18,
    height: 18,
  },

  githubText: {
    fontSize: 13,
    color: '#4A90E2',
    fontWeight: '600',
  },
});