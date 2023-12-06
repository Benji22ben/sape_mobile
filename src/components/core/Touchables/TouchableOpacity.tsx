import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {getStyles} from './style';

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
      style={[getStyles('primary').color, getStyles().touchable]}
      onPress={onPressHandler}
      {...props}>
      {typeof children === 'string' ? (
        <Text style={getStyles().text}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default SapeTouchableOpacity;
