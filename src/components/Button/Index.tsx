import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import globalTheme from '../../styles/globalTheme';
import { ButtonPropTypes } from './types';

function LoadingButtonComponent() {
  return (
    <ActivityIndicator
      className="w-2 px-4"
      color={globalTheme.colors.concrete[200]}
    />
  );
}

export function Button({
  icon,
  text,
  isLoading = false,
  ...props
}: ButtonPropTypes) {
  return (
    <TouchableOpacity
      className={`max-w-full bg-red-600 py-4 ${
        text ? 'px-2 gap-x-2' : 'px-4'
      } rounded-lg flex-row items-center justify-center `}
      activeOpacity={0.7}
      {...props}
    >
      {isLoading ? (
        <LoadingButtonComponent />
      ) : (
        <>
          <Text className="text-base font-anybodyBold text-concrete-100">
            {text}
          </Text>
          {icon ? icon : null}
        </>
      )}
    </TouchableOpacity>
  );
}
