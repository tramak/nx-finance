import React from 'react';
import { Button, Text, View } from 'react-native';
import { actions } from '@finance/redux';

export const HomeScreen = () => {
  return (
    <View>
      <Text>
        HOME PAGE!!
      </Text>
      <Button onPress={() => actions.auth.logout()} title="Logout" />
    </View>
  )
}
