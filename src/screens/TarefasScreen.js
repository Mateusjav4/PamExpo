import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const TAREFAS_ESTATICAS = [
  { id: '1', titulo: 'Revisar conteúdo de React Navigation', status: 'Pendente' },
  { id: '2', titulo: 'Implementar tela de login', status: 'Concluída' },
  { id: '3', titulo: 'Criar tela inicial com navegação', status: 'Concluída' },
  { id: '4', titulo: 'Adicionar lista de tarefas com FlatList', status: 'Em andamento' },
  { id: '5', titulo: 'Validar fluxo completo do app', status: 'Pendente' },
];

function ItemTarefa({ titulo, status }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTitulo}>{titulo}</Text>
      <Text style={styles.itemStatus}>Status: {status}</Text>
    </View>
  );
}

export function TarefasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>

      {/* keyExtractor evita warning/performance ruim ao renderizar listas no React Native. */}
      <FlatList
        data={TAREFAS_ESTATICAS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemTarefa titulo={item.titulo} status={item.status} />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 16,
    gap: 10,
  },
  item: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fafafa',
  },
  itemTitulo: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemStatus: {
    fontSize: 14,
    color: '#555',
  },
});

