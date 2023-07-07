import { useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';

interface useKeyboardHookType {
  isKeyboardOpen: boolean;
}
export function useKeyboard(): useKeyboardHookType {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false);
  useEffect(() => {
    let keyboardShowListener = Keyboard.addListener('keyboardWillShow', () => {
      setIsKeyboardOpen(true);
    });

    let keyboardHiddenListener = Keyboard.addListener(
      'keyboardWillShow',
      () => {
        setIsKeyboardOpen(true);
      }
    );

    if (Platform.OS === 'android') {
      keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => {
        setIsKeyboardOpen(true);
      });

      keyboardHiddenListener = Keyboard.addListener('keyboardDidHide', () => {
        setIsKeyboardOpen(true);
      });
    }

    return () => {
      keyboardShowListener.remove();
      keyboardHiddenListener.remove();
    }
  }, []);

  return { isKeyboardOpen };
}
