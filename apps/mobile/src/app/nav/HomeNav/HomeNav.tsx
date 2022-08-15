import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../screen/HomeScreen/HomeScreen';
import { CreateScreen } from '../../screen/CreateScreen/CreateScreen';

export type HomeStackNavigatorParamList = {
  Init: undefined;
  Create: {
    name: string;
    birthYear: string;
  };
};

const Stack = createNativeStackNavigator();

export const HomeNav = () => {
  return (
    <Stack.Navigator initialRouteName="Init">
      <Stack.Screen
        name="Init"
        component={HomeScreen}
        options={{
          title: 'Главная'
        }}
      />
      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{
          title: 'Создать'
        }}
      />
    </Stack.Navigator>
  )
}
