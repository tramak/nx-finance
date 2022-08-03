import * as auth from './auth/actions';
import * as refreshActions from './refreshActions/actions';
import * as request from './request/actions';
import * as settings from './settings/actions';

export const allActions = {
  ...auth,
  ...refreshActions,
  ...request,
  ...settings,
}
