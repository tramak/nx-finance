import { createSlice } from '@reduxjs/toolkit';
import * as I from './interfaces';

const initialState: I.IRequestState = {
  data: {}
};

const setRequest = (state: I.IRequestState, actionName: string, req: I.IRequestStateItem, requestId?: string) => {
  if (requestId) {
    if (!state.data[actionName]) {
      state.data[actionName] = {};
    }

    (state.data[actionName] as I.IRequestStateIds)[requestId] = req;
  } else {
    state.data[actionName] = req;
  }
};

const slice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setLoading(state, action: I.ISetLoadingAction) {
      const { action: actionName, requestId } = action.payload;
      const req = {
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: ''
      };

      setRequest(state, actionName, req, requestId);
    },
    setSuccess(state, action: I.ISetSuccessAction) {
      const { action: actionName, requestId } = action.payload;
      const req = {
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: ''
      }

      setRequest(state, actionName, req, requestId);
    },
    setError(state, action: I.ISetErrorAction) {
      const { action: actionName, error, requestId } = action.payload;
      const req = {
        isLoading: false,
        isSuccess: false,
        isError: true,
        error
      }

      setRequest(state, actionName, req, requestId);
    },
    clear(state, action: I.IClearAction) {
      if (typeof(action.payload) === 'string') {
        delete state.data[action.payload];
        return;
      }

      const { action: actionName, requestId } = action.payload;

      if (requestId) {
        if (!state.data[actionName]) {
          return;
        }
    
        delete (state.data[actionName] as I.IRequestStateIds)[requestId];
      } else {
        delete state.data[actionName];
      }
    },
    clearAll(state) {
      state.data = {};
    }
  }
});

export const {
  setLoading,
  setSuccess,
  setError,
  clear,
  clearAll
} = slice.actions;
export default slice.reducer;
