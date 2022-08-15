import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppSelector } from '@finance/redux';
import { LogInScreen } from '../../screen/LogInScreen/LogInScreen';
import { HomeNav } from '../HomeNav/HomeNav';
import { SettingsNav } from '../SettingsNav/SettingsNav';
import Home from '@ant-design/icons-svg/inline-svg/outlined/home.svg';
import Blog from '../../icons/blog.svg';

const Tab = createBottomTabNavigator();

export const MainNav = () => {
  const isLogin = useAppSelector((state) => !!state.auth?.tokens?.accessToken);

  if (!isLogin) {
    return <LogInScreen />;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Home width={24} height={24} stroke={color} fill={color} />
          } else if (route.name === 'Settings') {
            return <Blog width={24} height={24} stroke={color} />
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeNav} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="Settings" component={SettingsNav} />
    </Tab.Navigator>
  );
};
