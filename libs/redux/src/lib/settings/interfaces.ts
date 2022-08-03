import { ILang } from '@finance/translate';
import { IAction } from '@finance/types';

export interface ISettingsState {
  lang: ILang;
}

// slice
export type ISetLangAction = IAction<ILang>;
