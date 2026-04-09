import * as React from 'react';
import { Alert, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function onSubmit() {
    const ok = username.trim() === 'admin' && password === 'admin';
    if (!ok) {
      Alert.alert('Erro', 'Usuário ou senha inválidos.');
      return;
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

 return (
  <View style={styles.container}>
    <View style={styles.content}>

      <Image
        source={require('../../imgs/dracol.jpeg')}
        style={styles.logo}
      />

      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.subtitle}>Entre com suas credenciais</Text>

      <View style={styles.form}>
  
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Usuário</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Digite seu usuário"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

      </View>
      </View>
    </View>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7', // leve contraste com os cards
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  logo: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginBottom: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'left',
  },

  subtitle: {
    marginTop: 6,
    marginBottom: 24,
    fontSize: 18,
    color: '#212020',
    textAlign: 'left',
  },

  form: {
    gap: 16,
  },

  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 7,
    borderRadius:10,
  },

  label: {
    fontSize: 15,
    color: '#555',
    marginBottom: 6,
    fontWeight: '600',
  },

  input: {
    fontSize: 17,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius:10,
  },

  // 🔹 BOTÃO MELHORADO
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
    elevation: 4,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});