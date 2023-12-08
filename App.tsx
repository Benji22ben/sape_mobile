import React from 'react';

// Import your screens or components
import LoginScreen from './src/screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'native-base';
import {NativeBaseProvider} from 'native-base';

// Create a stack navigator
const Stack = createNativeStackNavigator();

// App component wrapped with NavigationContainer
const App: React.FC = () => {
  return (
    <>
      <NativeBaseProvider>
        <StatusBar translucent backgroundColor="transparent" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false, // This will hide the title bar
            }}>
            <Stack.Screen name="Home" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
};

export default App;
