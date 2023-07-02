import React, { Ref } from 'react';
import { TextInput, TextInputProps } from 'react-native';

type InputPropTypes = {
  placeholder: string;
  inputRef: Ref<TextInput>;
  type: 'default' | '';
} & TextInputProps;

export function Input({
  placeholder = 'Digite um texto',
  inputRef,
}: InputPropTypes) {
  return (
    <>
      <TextInput
        className="w-full p-4 border-2 border-brandBlack text-brandBlack rounded-lg font-anybodyRegular text-base placeholder:underline "
        placeholder={placeholder}
        placeholderTextColor="#263238"
        blurOnSubmit={true}
        ref={inputRef}
      />
    </>
  );
}
