import { Ref } from 'react';
import { InputModeOptions, KeyboardType, TextInputProps , TextInput} from 'react-native';

export type InputPropTypes = {
  placeholder?: string;
  inputRef?: Ref<TextInput>;
  type: InputModeOptions | 'password';
  value?: string;
  keyboardType?: KeyboardType;
} & TextInputProps;
