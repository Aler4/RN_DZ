import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Drivers} from '../components/Drivers';

export const SecondPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Drivers />
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
  }
);
