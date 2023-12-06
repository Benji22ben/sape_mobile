import {Text, TouchableHighlight, TouchableHighlightProps} from 'react-native';
import {getStyles} from './style';

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
      style={[getStyles('primary').color, getStyles().touchable]}
      onPress={onPressHandler}
      {...props}>
      {typeof children === 'string' ? (
        <Text style={getStyles().text}>{children}</Text>
      ) : (
        children
      )}
    </TouchableHighlight>
  );
};

export default SapeTouchableHighlight;
