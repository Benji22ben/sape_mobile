import React from 'react';
import {Image, ImageBackground} from 'react-native';
import SapePrimaryButton from '../components/core/Buttons/SapePrimaryButton';
import SapeSecondaryButton from '../components/core/Buttons/SapeSecondaryButton';
import {Pressable, Text, VStack, useTheme} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const NoAuthScreen = () => {
  const {colors} = useTheme();
  const [noAccountIsPressed, setNoAccountIsPressed] = React.useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleNoAccountPress = () => {
    setNoAccountIsPressed(!noAccountIsPressed);
  };

  return (
    <VStack flex={1} justifyContent={'center'}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: 'center',
          gap: 48,
          padding: 32,
        }}
        source={require('../assets/images/loginScreenBg.png')}
        resizeMode="cover">
        <Image
          style={{alignSelf: 'center'}}
          source={require('../assets/images/sape_logo.png')}
        />
        <VStack space={8}>
          <SapePrimaryButton
            onPress={() => {
              console.log('Register');
            }}
            text={"S'inscrire"}
          />
          <SapeSecondaryButton
            onPress={() => navigation.navigate('Login')}
            text={'Se connecter'}
          />
        </VStack>
        <Pressable
          style={{alignSelf: 'center'}}
          onPressOut={handleNoAccountPress}
          onPressIn={handleNoAccountPress}>
          <Text
            textDecorationLine={'underline'}
            color={
              noAccountIsPressed ? colors.secondary[500] : colors.tertiary[500]
            }>
            Utiliser Sape sans compte ?
          </Text>
        </Pressable>
      </ImageBackground>
    </VStack>
  );
};

export default NoAuthScreen;
