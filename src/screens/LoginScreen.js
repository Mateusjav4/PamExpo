import * as React from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '@react-navigation/elements';

export function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function onSubmit() {
    // Exercício: credenciais fixas (em app real, valide via API e use armazenamento seguro/token).
    const ok = username.trim() === 'admin' && password === 'admin';
    if (!ok) {
      Alert.alert('Erro', 'Usuário ou senha inválidos.');
      return;
    }

    // `reset` troca o histórico de navegação: impede voltar para o Login após autenticar.
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.subtitle}>Entre com sua senha e usuário!</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Digite seu usuário"
          autoCapitalize="none"
          autoCorrect={false}
          inputMode="text"
          style={styles.input}
          returnKeyType="next"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Digite sua senha"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          returnKeyType="done"
          onSubmitEditing={onSubmit}
        />

        <Button onPress={onSubmit}>Entrar</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 24,
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
  },
  form: {
    gap: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
});

