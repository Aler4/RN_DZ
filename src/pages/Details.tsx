import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet,} from "react-native";
import { drivers } from "../services/drivers";

type Props = {
  route: {params: number},
}

let driverList = drivers();

export const Details: React.FC<Props> = ({route}) => {
  let data = route.params;
  let driver = useMemo(() => driverList.filter(el => el.id === data.id)[0],[route])
  const [driverInfo, setDriverInfo] = useState(driver);


  return (
    <View style={styles.container}>
        <View>
          <Text style={styles.title}>Ім'я: <Text style={styles.desc}>{driverInfo.name}</Text></Text>
          <Text style={styles.title}>Автомобіль: <Text style={styles.desc}>{driverInfo.car}</Text></Text>
          <Text style={styles.title}>Стаж: <Text style={styles.desc}>{driverInfo.experience} років</Text></Text>
          <Text style={styles.title}>Оцінка: <Text style={styles.desc}>{driverInfo.rating}\10</Text></Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10
  },

  title: {
    fontSize: 20,
    color: '#000',
  },
  desc: {
    fontSize : 18,
    fontStyle: 'italic',
  }
});

