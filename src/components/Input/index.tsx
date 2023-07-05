import Eye from 'phosphor-react-native/src/icons/Eye';
import EyeClosed from 'phosphor-react-native/src/icons/EyeClosed';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { InputPropTypes } from './types';
import globalTheme from '../../styles/globalTheme';

export function Input({
  placeholder = 'Texto',
  inputRef,
  type = 'password',
  value = '',
  keyboardType,
  ...props
}: InputPropTypes) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | undefined>(value);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  function handlePasswordIsVisible() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  function handleIsFocused() {
    setIsFocused(true);
  }
  function handleIsBlurred() {
    setIsFocused(false);
  }

  return (
    <View
      className={`flex-row items-center border-2 ${
        isFocused ? 'border-outer-space-600' : 'border-outer-space-950 '
      }  text-outer-space-950 rounded-lg`}
    >
      <TextInput
        className={`${
          type === 'password' ? 'w-[90%]' : 'w-full'
        } p-2 font-anybodyRegular text-base ${
          inputValue?.length > 0
            ? 'placeholder:no-underline'
            : 'placeholder:underline'
        }`}
        defaultValue={inputValue}
        placeholder={placeholder}
        placeholderTextColor={globalTheme.colors['outer-space'][950]}
        selectionColor={globalTheme.colors['outer-space'][950]}
        secureTextEntry={isPasswordVisible}
        keyboardType={keyboardType}
        onChangeText={(insertedText) => setInputValue(insertedText)}
        hitSlop={{
          bottom: 8,
          top: 8,
          left: 8,
          right: type !== 'password' ? 8 : undefined,
        }}
        ref={inputRef}
        onFocus={handleIsFocused}
        onBlur={handleIsBlurred}
        {...props}
      />
      {type === 'password' ? (
        <TouchableOpacity
          onPress={handlePasswordIsVisible}
          hitSlop={{ bottom: 8, top: 8, left: 8, right: 8 }}
        >
          {isPasswordVisible ? (
            <EyeClosed color="#263238" />
          ) : (
            <Eye color="#263238" />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
