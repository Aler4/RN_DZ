import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
export const ThirdPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>you are on the page №3</Text>

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
