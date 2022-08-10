import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CenterSpinner, LogIn } from '@finance/ui-mobile';
import { Home } from '../../Home/Home';

const Stack = createNativeStackNavigator();

export const MainNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
    >
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='login' component={LogIn} />
    </Stack.Navigator>
  );
};
