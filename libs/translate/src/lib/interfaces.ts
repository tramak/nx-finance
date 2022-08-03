export type ILang = 'en' | 'ru';
export interface ITranslateData {
  [module: string]: {
    [text: string]: string;
  }
}

export interface ITranslate {
  ru: ITranslateData,
  en: ITranslateData
}

export interface ILangOption {
  value: ILang;
  label: string;
  short: string;
}
