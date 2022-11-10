import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';

let text: string = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.' +
  ' Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный' +
  ' печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem' +
  ' Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации' +
  ' в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы' +
  ' электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.';


export const About: React.FC = () => {

 let [info, setInfo] = useState<string>(text);

  return (
    <View style={styles.container}>
      <Text> you are on the page №1</Text>
      <Text>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
  }
);
