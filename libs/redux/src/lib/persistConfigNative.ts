import storage from '@react-native-async-storage/async-storage';

export const persistConfigNative = {
  key: 'root',
  storage,
  version: 1,
  whitelist: [
    'auth',
  ],
};
