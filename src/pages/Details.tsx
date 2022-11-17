import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {list, TDriver} from '../services/drivers';

type Props = {
  route: {params: {id: number}};
};

export const Details: React.FC<Props> = ({route}) => {
  let data = route.params;

  let driver = useMemo(
    () => list.filter((el: TDriver) => el.id === data.id)[0],
    [data.id],
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {"Ім'я: "} <Text style={styles.desc}>{driver.name}</Text>
        </Text>
        <Text style={styles.title}>
          {'Автомобіль: '} <Text style={styles.desc}>{driver.car}</Text>
        </Text>
        <Text style={styles.title}>
          {'Стаж: '}<Text style={styles.desc}>{driver.experience} років</Text>
        </Text>
        <Text style={styles.title}>
          {'Оцінка: '} <Text style={styles.desc}>{driver.rating}\10</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },

  title: {
    fontSize: 20,
    color: '#000',
  },
  desc: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});
