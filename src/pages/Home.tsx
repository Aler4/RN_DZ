import React from 'react';
import { View, Text, StyleSheet, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Home: React.FC = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Button title='Details' onPress={() => nav.navigate('Details', {id: 1})} />
        <Button title='Details' onPress={() => nav.navigate('Details', {id: 2})} />
        <Button title='Details' onPress={() => nav.navigate('Details', {id: 3})} />
      </View>

      <Text style={styles.des}>Home...</Text>
    </View>


  );
};

const styles = StyleSheet.create(
  {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabs: {
      flexDirection: 'row',
    },
    des: {
      fontSize: 30,
      color: "#20aff7",
      marginVertical: 100,
    }
  }
);
