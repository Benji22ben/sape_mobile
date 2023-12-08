import React from 'react';
import {SapeButtonsProps} from './SapeButtons';
import SapeButtons from './SapeButtons';
import {Colors} from '../../../style_const';

function SapePrimaryButton({...props}: SapeButtonsProps) {
  return (
    <SapeButtons
      {...props}
      textColor={Colors.secondary}
      bgColorBox={Colors.primary}
    />
  );
}

export default SapePrimaryButton;
