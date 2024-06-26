// components/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Index from './Index';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
});
