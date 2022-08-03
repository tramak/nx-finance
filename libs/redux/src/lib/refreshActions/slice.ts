import { createSlice } from '@reduxjs/toolkit';
import * as I from './interfaces';

const initialState: I.IRefreshActionsState = {
  isLoading: false,
  data: []
};

const slice = createSlice({
  name: 'refreshActions',
  initialState,
  reducers: {
    addRefreshAction(state, action: I.IRefreshActionsAddAction) {
      state.data.push(action.payload);
    },
    setRefreshActionsLoading(state, action: I.AetRefreshActionsLoadingAction) {
      state.isLoading = action.payload;
    }
  }
});

export const {
  addRefreshAction,
  setRefreshActionsLoading
} = slice.actions;
export default slice.reducer;
