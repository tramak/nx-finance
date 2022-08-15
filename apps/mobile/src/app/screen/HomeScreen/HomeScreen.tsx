import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Stack, Switch } from '@react-native-material/core';
import { actions } from '@finance/redux';
import { useNavigation } from '@react-navigation/native';
import Plus from '@ant-design/icons-svg/inline-svg/outlined/plus.svg';
import { HomeStackNavigatorParamList } from '../../nav/HomeNav/HomeNav';

export const HomeScreen = () => {
  const { navigate } = useNavigation<HomeStackNavigatorParamList>();
  const [loading, setLoading] = useState(true);

  return (
    <View>
      <Text>
        HOME PAGE!!
      </Text>

      <Stack center spacing={4}>
        <Switch value={loading} onValueChange={setLoading} />

        <Button
          onPress={() => navigate('Create')}
          title="Create Test"
          trailing={props => <Plus fill={'#fff'} width={24} height={24} />}
          loadingIndicator="⏰"
          loading={loading}
        />

        <Button
          title="Button"
          loading={loading}
          loadingIndicator={props => (
            <Text
              style={{
                backgroundColor: props.color,
                color: "black",
                borderRadius: 50,
                width: 24,
                height: 24,
                textAlign: "center",
              }}
            >
              ...
            </Text>
          )}
          loadingIndicatorPosition="overlay"
        />
      </Stack>

      <Button onPress={() => actions.auth.logout()} title="Logout" />
    </View>
  )
}
