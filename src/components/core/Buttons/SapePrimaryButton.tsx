import React from 'react';
import {SapeButtonsProps} from './SapeButtons';
import SapeButtons from './SapeButtons';
import {useTheme} from 'native-base';

function SapePrimaryButton({...props}: SapeButtonsProps) {
  const {colors} = useTheme();

  return (
    <SapeButtons
      {...props}
      textColor={colors.secondary[500]}
      bgColorBox={colors.primary[500]}
    />
  );
}

export default SapePrimaryButton;
