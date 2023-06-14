import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import {
  useFonts,
  Anybody_400Regular,
  Anybody_500Medium,
  Anybody_700Bold,
} from '@expo-google-fonts/anybody';
import * as SplashScreen from 'expo-splash-screen/';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Anybody_400Regular,
    Anybody_500Medium,
    Anybody_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView>
      <Text>Hello, world</Text>
    </SafeAreaView>
  );
}
