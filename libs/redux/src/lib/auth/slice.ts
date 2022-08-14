import { createSlice } from '@reduxjs/toolkit';
import { IAuth } from '@finance/types';

const initialState: IAuth.State = {};

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setTokens(state, action: IAuth.SetTokensAction) {
            state.tokens = action.payload;

            if (typeof localStorage !== 'undefined') {
              localStorage.setItem('refreshToken', action.payload.refreshToken);
              localStorage.setItem('accessToken', action.payload.accessToken);
            }
        },
        removeTokens(state) {
            state.tokens = undefined;
            if (typeof localStorage !== 'undefined') {
              localStorage?.removeItem('refreshToken');
              localStorage?.removeItem('accessToken');
            }
        },
    },
});

export const { setTokens, removeTokens } = slice.actions;
export default slice.reducer;
