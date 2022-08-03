// import { useMemo } from 'react';
import { useAppSelector } from './useAppSelector';
import { getStateRequest } from '../request/selectors';

export const useRequest = (name: string, id?: string) => {
  // const selector: I.IRequestStateItem = useMemo(() => {
  //   return getRequest(name, id) as I.IRequestStateItem;
  // }, [name, id]);
  //
  // return useAppSelector(selector);
  return useAppSelector(state => getStateRequest(state.request, name, id));
};
