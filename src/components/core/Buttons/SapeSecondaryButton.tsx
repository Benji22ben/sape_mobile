import React from 'react';
import {SapeButtonsProps} from './SapeButtons';
import SapeButtons from './SapeButtons';
import {Colors} from '../../../style_const';

function SapeSecondaryButton({...props}: SapeButtonsProps) {
  return (
    <SapeButtons
      {...props}
      textColor={Colors.primary}
      bgColorBox={Colors.secondary}
    />
  );
}

export default SapeSecondaryButton;
