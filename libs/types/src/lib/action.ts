import { IResponse } from './response';

export interface IMetaData {
  promiseActions: {
    resolve: (data?: unknown) => void;
    reject: (errors?: IResponse.Errors) => void;
  },
  request?: {
    id: string;
  }
}

export interface IAction<P> {
  type: string;
  payload: P;
  meta?: IMetaData;
}
