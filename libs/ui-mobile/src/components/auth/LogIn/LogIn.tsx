import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { config } from '@finance/config';
import { IAuth } from '@finance/types';
import styles from './Login.styles';
//
// GoogleSignin.configure();

export interface ILogInProps {
  setTokens: (payload: IAuth.Tokens) => void;
}

export const LogIn = ({ setTokens }: ILogInProps) => {
  const isSigninInProgress = false;

  useEffect(() => {
    try {
      GoogleSignin.configure({
        webClientId: config.webClientId,
        offlineAccess: true,
        iosClientId: config.iosClientId,
      });

    } catch (e) {
      console.log(e)
    }
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      setTokens({
        accessToken: userInfo.idToken,
        refreshToken: userInfo.idToken,
      })
      console.log({ userInfo });
    } catch (error) {
      console.log({ error });
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View style={styles.center}>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        disabled={isSigninInProgress}
      />
    </View>
  );
}
