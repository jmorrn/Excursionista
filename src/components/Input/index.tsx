import Eye from 'phosphor-react-native/src/icons/Eye';
import EyeClosed from 'phosphor-react-native/src/icons/EyeClosed';
import React, { useCallback, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { InputPropTypes } from './types';

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

  console.log(inputValue?.length)


  function handlePasswordIsVisible() {
    setIsPasswordVisible(!isPasswordVisible);
  }
  return (
    <View
      className={`p-2 flex-row items-center border-2 border-black-brandBlack text-black-brandBlack rounded-lg  `}
    >
      <TextInput
        className={`w-[90%] font-anybodyRegular text-base placeholder:${
          inputValue?.length > 0 ? 'no-underline' : 'underline'
        }`}
        defaultValue={inputValue}
        placeholder={placeholder}
        placeholderTextColor="#263238"
        selectionColor="#263238"
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
        {...props}
      />
      {type === 'password' ? (
        <TouchableOpacity
          className=""
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
