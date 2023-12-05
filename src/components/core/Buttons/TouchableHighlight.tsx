import {Text, TouchableHighlight, TouchableHighlightProps} from 'react-native';
import {style} from './style';

interface SapeTouchableHighlightProps extends TouchableHighlightProps {}

const SapeTouchableHighlight = ({
  children,
  ...props
}: SapeTouchableHighlightProps) => {
  const onPressHandler = () => {
    console.log('Button pressed!');
  };

  return (
    <TouchableHighlight
      style={style.touchable}
      onPress={onPressHandler}
      {...props}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </TouchableHighlight>
  );
};

export default SapeTouchableHighlight;
