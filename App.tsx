import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {General} from './src/pages/General';
import {About} from './src/pages/About';


const Tabs = createBottomTabNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tabs.Screen name="General"
                     component={General}
                     options={{
                      headerStyle: {
                        backgroundColor: '#4f4545',
                      },
                       headerTitleStyle: {
                         fontWeight: 'bold',
                         color: "#fff"
                       },
                    }}
        />
        <Tabs.Screen name="About"
                     component={About}
                     options={{
                       headerStyle: {
                         backgroundColor: '#4f4545',
                       },
                       headerTitleStyle: {
                         fontWeight: 'bold',
                         color: "#fff"
                       },
                     }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
