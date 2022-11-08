import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { drivers, TDriver } from './services/drivers';

export const Drivers: React.FC = () => {

  const [listDrivers, SetlistDrivers] = useState<Array<TDriver> | null>(drivers());

  return (
    <ScrollView>
      {listDrivers?.map((driver,i) => {
        return (
          <View key={i} style={styles.card}>
            <Text>Ім'я: {driver.name}</Text>
            <Text>Автомобіль: {driver.car}</Text>
            <Text>Стаж: {driver.experience} років</Text>
            <Text>Оцінка: {driver.rating}\10</Text>
          </View>
        )
      })}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  }
});
