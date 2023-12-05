import React from 'react';
import {Text, StatusBar} from 'react-native';
import {SapeTouchableOpacity} from '../components/core/Buttons/Button';
import Wrapper from '../components/core/Wrapper';

const HomeScreen = () => {
  return (
    <Wrapper>
      <Text>TODO Photo en fond</Text>
      <Text>TODO Logo</Text>
      <Text>TODO Titre</Text>
      <SapeTouchableOpacity>S'inscrire</SapeTouchableOpacity>
      <SapeTouchableOpacity>Se Connecter</SapeTouchableOpacity>
    </Wrapper>
  );
};

export default HomeScreen;
