import { bindActionCreators } from '@reduxjs/toolkit';
import { store } from './store';

import * as auth from './auth/actions';
import * as refreshActions from './refreshActions/actions';
import * as request from './request/actions';
import * as settings from './settings/actions';

export const actions = {
  auth: bindActionCreators(auth, store.dispatch),
  refreshActions: bindActionCreators(refreshActions, store.dispatch),
  request: bindActionCreators(request, store.dispatch),
  settings: bindActionCreators(settings, store.dispatch),
};
