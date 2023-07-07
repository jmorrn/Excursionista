import { TouchableOpacityProps } from 'react-native';

export type ButtonPropTypes = {
  icon?: JSX.Element;
  text?: string;
  isLoading?: boolean;
} & TouchableOpacityProps;
