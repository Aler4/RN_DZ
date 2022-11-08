import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from './src/pages/Home';
import {FirstPage} from './src/pages/FirstPage';
import {SecondPage} from './src/pages/SecondPage';
import {ThirdPage} from './src/pages/ThirdPage';
import { Tabs } from "./src/components/Tabs";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Page 1" component={FirstPage} />
        <Stack.Screen name="Page 2" component={SecondPage} />
        <Stack.Screen name="Page 3" component={ThirdPage} />
      </Stack.Navigator>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
