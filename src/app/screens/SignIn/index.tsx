import React, { useState } from 'react';
import {
  Image,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import SignInImage from '../../../../assets/images/SignInImage.png';
import ExcursionistaLogo from '../../../../assets/images/Logo.png';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button/Index';
import LockKeyOpen from 'phosphor-react-native/src/icons/LockKeyOpen';
import globalTheme from '../../../styles/globalTheme';
import Container from '../../Container';

export function SignIn() {
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);

  function handleSubmit() {
    setIsLoadingLogin(true);
    setTimeout(() => setIsLoadingLogin(false), 3000);
  }
  return (
    <>
      <Image source={SignInImage} className="w-full" />
      <Text className="text-4xl font-anybodyBold text-red-600 mt-6">
        Welcome, user.
      </Text>
      <Text className="text-xs font-anybodyRegular text-outer-space-950 mt-2">
        Log in into your account.
      </Text>

      <KeyboardAvoidingView
        className="flex  mt-6 flex-1"
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      >
        <View>
          <Input type="text" placeholder="Username" />
          <View className="mt-2">
            <Input type="password" placeholder="Password" />
          </View>
        </View>
      </KeyboardAvoidingView>

      <View className="flex-row justify-between items-center mt-4 w-full">
        <Text>Or create an account</Text>
        <Button
          text="Login"
          icon={<LockKeyOpen color={globalTheme.colors.concrete[100]} />}
          onPress={handleSubmit}
          isLoading={isLoadingLogin}
        />
      </View>

      <View className=" flex-row gap-x-2 justify-center items-center mt-4">
        <Image source={ExcursionistaLogo} className=" w-[60px] h-[60px]" />
        <View className="items-end">
          <Text className="text-xl text-red-600 font-anybodyBold">
            Excursionista
          </Text>
          <Text className="font-anybodyRegular">© Copyright 2023</Text>
        </View>
      </View>
    </>
  );
}
