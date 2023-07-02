import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import {
  useFonts,
  Anybody_400Regular,
  Anybody_500Medium,
  Anybody_700Bold,
} from '@expo-google-fonts/anybody';

import { StatusBar } from 'expo-status-bar';
import Container from './src/app/Container';
import { SignIn } from './src/app/screens/SignIn';

export default function App() {
  const [isFontsLoaded] = useFonts({
    Anybody: Anybody_400Regular,
    Anybody_Medium: Anybody_500Medium,
    Anybody_Bold: Anybody_700Bold,
  });

  if (!isFontsLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor="transparent" />
      <Container>
        <SignIn />
      </Container>
    </>
  );
}
