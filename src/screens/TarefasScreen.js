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
  const statusStyle =
    status === 'Concluída'
      ? styles.statusDone
      : status === 'Em andamento'
      ? styles.statusProgress
      : styles.statusPending;

  return (
    <View style={styles.item}>
      <Text style={styles.itemTitulo}>{titulo}</Text>

      <Text style={[styles.itemStatus, statusStyle]}>
        {status}
      </Text>
    </View>
  );
}

export function TarefasScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lista de Tarefas</Text>
      </View>

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
    backgroundColor: '#f2f4f7',
  },

  header: {
    backgroundColor: '#4A90E2',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },

  listContent: {
    padding: 16,
    gap: 12,
  },

  item: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    elevation: 3,
  },

  itemTitulo: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#222',
  },

  itemStatus: {
    fontSize: 13,
    fontWeight: '600',
  },

  statusDone: {
    color: '#2ecc71',
  },

  statusProgress: {
    color: '#f39c12',
  },

  statusPending: {
    color: '#e74c3c', 
  }
});