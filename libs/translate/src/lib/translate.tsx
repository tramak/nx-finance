import { useContext, useMemo } from 'react';
import { TranslateContext } from './TranslateContext';
import en from './langs/en';
import ru from './langs/ru';
import { ILang, ITranslate } from './interfaces';

const langData: ITranslate = {
  ru,
  en
}

const DEFAULT_MODULE = 'common';
export function translate(lang: ILang, text: string, module?: string): string {
  const mod = module || DEFAULT_MODULE;
  const data = langData[lang];
  const dataModule = data?.[mod] || data?.[DEFAULT_MODULE];

  return dataModule?.[text] || text;
}

export function useTranslate() {
  const context = useContext(TranslateContext);
  const { lang } = context;

  return useMemo(() => {
    return (text: string, module?: string) => translate(lang, text, module);
  }, [ lang ]);
}

export default useTranslate;
