import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../Home/Home';

const Stack = createNativeStackNavigator();

export const MainNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{ unmountOnBlur: true }}
    >
      <Stack.Screen name='Categories' component={Home} />
    </Stack.Navigator>
  );
};
