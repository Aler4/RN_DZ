import React, {useCallback} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  Details: {id: number} | undefined;
};

export const Home: React.FC = () => {
  const nav = useNavigation();
  let goDetails = useCallback(
    (id: number) => nav.navigate('Details', {id: id}),
    [nav],
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Button title="Details" onPress={() => goDetails(3)} />
        <Button title="Details" onPress={() => goDetails(1)} />
        <Button title="Details" onPress={() => goDetails(2)} />
      </View>

      <Text style={styles.des}>Home...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
  },
  des: {
    fontSize: 30,
    color: '#20aff7',
    marginVertical: 100,
  },
});
