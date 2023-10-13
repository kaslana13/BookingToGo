import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Detail} from './Detail';
import {AddGuest} from './AddGuest';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Detail">
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="AddGuest" component={AddGuest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
