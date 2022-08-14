import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppSelector } from '@finance/redux';
import Home from '@ant-design/icons-svg/inline-svg/outlined/home.svg';
import Blog from '../../icons/blog.svg';
import { HomeScreen } from '../../screen/HomeScreen/HomeScreen';
import { LogInScreen } from '../../screen/LogInScreen/LogInScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

export const MainNav = () => {
  const isLogin = useAppSelector((state) => !!state.auth?.tokens?.accessToken);
  console.log(isLogin);

  if (!isLogin) {
    return <LogInScreen />;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
            return <Home width={24} height={24} stroke="#000000" fill="#000000" />
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          return <Blog width={24} height={24} stroke="#000000" />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  );
};
