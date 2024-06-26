// components/ThemedText.tsx
import React from 'react';
import { Text, TextProps } from 'react-native';
import { useTheme } from '@react-navigation/native';

const ThemedText: React.FC<TextProps> = (props) => {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text }} {...props} />;
};

export default ThemedText;
