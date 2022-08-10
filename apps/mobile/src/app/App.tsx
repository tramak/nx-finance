import React, { useRef, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from '@finance/redux';
import { CenterSpinner, LogIn } from '@finance/ui-mobile';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNav } from './components/nav/MainNav/MainNav';

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<CenterSpinner />} persistor={persistor}>
          <NavigationContainer>
            <MainNav />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
