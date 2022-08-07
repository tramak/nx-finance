import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

export const CenterSpinner = () => (
  <View style={styles.container}>
    <ActivityIndicator />
  </View>
);
