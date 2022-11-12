import React from 'react';
import { View, Text, StyleSheet,} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from "./Home";
import { Details } from "./Details";

const Stack = createNativeStackNavigator();


export const General: React.FC = () => {

  return (

      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name={'Home'}
                      component={Home}
                      options={{

                        headerStyle: {
                          backgroundColor: 'red'
                        }
        }}
        />
        <Stack.Screen name={'Details'} component={Details}  />
      </Stack.Navigator>
  );
};

