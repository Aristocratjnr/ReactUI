// components/SettingsScreen.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ThemedText } from '@/components/ThemedText'; // Import the correct context object

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export default function SettingsScreen() {
  const { theme, toggleTheme } = useContext<ThemeContextType>(ThemedText); // Use the correct context object

  return (
    <View style={[styles.container, theme === 'light' ? styles.lightContainer : styles.darkContainer]}>
      <Text style={styles.title}>Settings</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
});
