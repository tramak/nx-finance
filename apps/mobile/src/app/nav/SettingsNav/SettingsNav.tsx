import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../screen/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

export const SettingsNav = () => {
  return (
    <Stack.Navigator initialRouteName="Init">
      <Stack.Screen
        name="Init"
        component={HomeScreen}
        options={{
          title: 'Настройки'
        }}
      />
    </Stack.Navigator>
  )
}
