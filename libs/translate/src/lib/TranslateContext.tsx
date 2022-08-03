import React from 'react';
import { ILang } from './interfaces';

interface IDefaultValue {
  lang: ILang
}
const defaultValue: IDefaultValue = {
  lang: 'ru'
};

export const TranslateContext = React.createContext(defaultValue);
