import { SafeAreaView, Text } from 'react-native';
import React from 'react';

export default function Container({ children }) {
  return <SafeAreaView className="p-6">{children}</SafeAreaView>;
}
