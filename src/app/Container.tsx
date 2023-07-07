import { SafeAreaView, ScrollView } from 'react-native';
import React, { useMemo } from 'react';
import { useKeyboard } from '../hooks/useKeyboard';

export default function Container({ children }) {
  const { isKeyboardOpen } = useKeyboard();

  const paddingIfKeyboard = useMemo(() => {
    return isKeyboardOpen ? 'px-6' : 'p-6';
  }, [isKeyboardOpen]);

  return (
    <SafeAreaView className={`${paddingIfKeyboard} flex-1`}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
