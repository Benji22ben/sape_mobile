import {
  Input,
  VStack,
  Text,
  Pressable,
  Icon,
  IconButton,
  Image,
} from 'native-base';
import React from 'react';
import SapePrimaryButton from '../components/core/Buttons/SapePrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <VStack padding={8} space={8}>
      <Text>LOGO</Text>
      <Text>Se Connecter</Text>
      <Text>
        Entrez votre nom d'utilisateur et mot de passe afin de vous connectez
      </Text>
      <Input placeholder="Nom d'utilisateur" />
      <Input
        //   InputRightElement={<VisibilityIcon />}
        placeholder="Mot de passe"
      />
      <SapePrimaryButton
        text="Connexion"
        onPress={() => navigation.navigate('Home')}
      />
    </VStack>
  );
}

export default LoginScreen;
