import {Pressable, Text} from 'native-base';
import {InterfacePressableProps} from 'native-base/lib/typescript/components/primitives/Pressable/types';
import React, {useEffect} from 'react';
import {Animated} from 'react-native';

export interface SapeButtonsProps extends InterfacePressableProps {
  text: string;
  textColor?: string;
  bgColorBox?: any;
}

function SapeButtons({
  text,
  textColor,
  bgColorBox,
  ...props
}: SapeButtonsProps) {
  const opacity = React.useRef(new Animated.Value(1)).current;

  return (
    <Pressable {...props}>
      {({isPressed}) => {
        useEffect(() => {
          Animated.timing(opacity, {
            toValue: isPressed ? 0.8 : 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
        }, [isPressed]);

        return (
          <Animated.View
            style={{
              backgroundColor: bgColorBox,
              paddingTop: 16,
              paddingBottom: 16,
              paddingLeft: 8,
              paddingRight: 8,
              opacity: opacity,
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}>
            <Text color={textColor} alignSelf={'center'}>
              {text}
            </Text>
          </Animated.View>
        );
      }}
    </Pressable>
  );
}

export default SapeButtons;
