import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";


export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>You at home now</Text>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
);
