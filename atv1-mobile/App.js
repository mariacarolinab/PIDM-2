import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Disciplina from './components/Disciplina';

export default function App() {
  return (
    <View style={styles.container}>
      <Corpo></Corpo>
      <Cabecalho nome = 'Lizzo' curso = 'Design Digital'></Cabecalho>
      <Disciplina disciplina ='História da Arte'></Disciplina>
      <Disciplina disciplina ='História do Design'></Disciplina>
      <Disciplina disciplina ='Fotografia'></Disciplina>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
