import { createSlice } from '@reduxjs/toolkit';
import * as I from './interfaces';

const initialState: I.ISettingsState = {
  lang: 'en',
};

const slice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setLang: (state, action: I.ISetLangAction) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = slice.actions;
export default slice.reducer;
