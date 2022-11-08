import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Tabs: React.FC = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title='Home'
              onPress={() => navigation.navigate('Home')}
      />
      <Button title='Page 1'
              onPress={() => navigation.navigate('Page 1')}
      />
      <Button title='Page 2'
              onPress={() => navigation.navigate('Page 2')}
      />
      <Button title='Page 3'
              onPress={() => navigation.navigate('Page 3')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
});
