import { RootState } from '../store';

export const getIsAdmin = (state: RootState) => {
  return !!state.auth.tokens?.accessToken;
};
