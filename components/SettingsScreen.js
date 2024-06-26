// screens/SettingsScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ThemeContext } from '../ThemeContext';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, theme === 'light' ? styles.lightContainer : styles.darkContainer]}>
      <Text style={styles.title}>Settings</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
      {/* Add more settings options here */}
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
