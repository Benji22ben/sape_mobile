import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {style} from './style';

interface SapeTouchableOpacityProps extends TouchableOpacityProps {}

const SapeTouchableOpacity = ({
  children,
  ...props
}: SapeTouchableOpacityProps) => {
  const onPressHandler = () => {
    console.log('Button pressed!');
  };

  return (
    <TouchableOpacity
      style={style.touchable}
      onPress={onPressHandler}
      {...props}>
      {typeof children === 'string' ? (
        <Text style={style.text}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default SapeTouchableOpacity;
