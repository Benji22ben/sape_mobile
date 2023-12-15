import React from 'react';
import {SapeButtonsProps} from './SapeButtons';
import SapeButtons from './SapeButtons';
import {useTheme} from 'native-base';

function SapeSecondaryButton({...props}: SapeButtonsProps) {
  const {colors} = useTheme();

  return (
    <SapeButtons
      {...props}
      textColor={colors.primary[500]}
      bgColorBox={colors.secondary[500]}
    />
  );
}

export default SapeSecondaryButton;
