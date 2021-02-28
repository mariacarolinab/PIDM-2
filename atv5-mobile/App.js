import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RotasTelas from './src/components/Routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <RotasTelas></RotasTelas>
    </SafeAreaProvider>
  );
  }