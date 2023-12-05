import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({children}: Props) => {
  return <View style={style.wrapper}>{children}</View>;
};

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    gap: 48,
  },
});

export default Wrapper;
