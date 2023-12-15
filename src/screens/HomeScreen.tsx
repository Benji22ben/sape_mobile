import {Text, VStack} from 'native-base';
import React from 'react';

function HomeScreen() {
  const outfit = 46;

  return (
    <VStack>
      <Text>Bonjour Julien</Text>
      <Text>Vous avez ajouté {outfit}</Text>
    </VStack>
  );
}

export default HomeScreen;
