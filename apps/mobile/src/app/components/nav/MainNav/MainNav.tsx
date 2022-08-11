import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CenterSpinner, LogIn } from '@finance/ui-mobile';
import { Home } from '../../Home/Home';
import { useAppSelector } from '@finance/redux';

const Stack = createNativeStackNavigator();

export const MainNav = () => {
  const isLogin = useAppSelector((state) => !!state.auth?.tokens?.accessToken);
  console.log(isLogin);

  if (!isLogin) {
    return <LogIn />;
  }

  return (
    <Stack.Navigator
      initialRouteName="login"
    >
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='login' component={LogIn} />
    </Stack.Navigator>
  );
};
