import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import SapePrimaryButton from '../components/core/Buttons/SapePrimaryButton';
import SapeSecondaryButton from '../components/core/Buttons/SapeSecondaryButton';
import {Pressable, Text} from 'native-base';
import {Colors} from '../style_const';

const HomeScreen = () => {
  return (
    <View style={loginStyle.container}>
      <ImageBackground
        style={loginStyle.imageBg}
        source={require('../assets/images/loginScreenBg.png')}
        resizeMode="cover">
        <Image
          style={loginStyle.center}
          source={require('../assets/images/sape_logo.png')}
        />
        <View style={loginStyle.buttonContainer}>
          <SapePrimaryButton
            onPress={() => {
              console.log('Register');
            }}
            text={"S'inscrire"}
          />
          <SapeSecondaryButton
            onPress={() => {
              console.log('Login');
            }}
            text={'Se connecter'}
          />
        </View>
        <Pressable style={{alignSelf: 'center'}}>
          <Text
            style={[
              loginStyle.center,
              {textDecorationLine: 'underline', color: Colors.tertiary},
            ]}>
            Utiliser Sape sans compte ?
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const loginStyle = StyleSheet.create({
  imageBg: {
    flex: 1,
    justifyContent: 'center',
    gap: 48,
    padding: 32,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    gap: 32,
  },
  center: {
    alignSelf: 'center',
  },
});

export default HomeScreen;
