// Index.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/components/HomeScreen';
import SettingsScreen from '@/components/SettingsScreen';
import ThemeProvider from '@/components/ThemeContext';

const Tab = createBottomTabNavigator();

export default function index() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
      <ThemeProvider />
    </NavigationContainer>
  );
}
