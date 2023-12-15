import React from 'react';

// Import your screens or components
import NoAuthScreen from './src/screens/NoAuthScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

// Import react-navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import NativeBase
import {StatusBar, extendTheme} from 'native-base';
import {NativeBaseProvider} from 'native-base';
import theme from './app.theme';

const appTheme = extendTheme(theme);

// Create a stack navigator
const Stack = createNativeStackNavigator();

// App component wrapped with NavigationContainer
const App: React.FC = () => {
  const isAuth = 0;

  return (
    <NativeBaseProvider theme={appTheme}>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isAuth ? 'Home' : 'NoAuthScreen'}
          screenOptions={{
            headerShown: false, // This will hide the title bar
          }}>
          {isAuth ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <>
              <Stack.Screen name="NoAuthScreen" component={NoAuthScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
