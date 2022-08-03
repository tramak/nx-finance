import React from 'react';
import { ILang, ILangOption } from '@finance/translate';
import { dialog } from '../../dialog';

export interface IHeaderProps {
  isLogin: boolean;
  logout: () => void;
  langs: ILangOption[];
  lang: ILang;
  changeLang: (value: ILang) => void;
}

export const Header = ({
  isLogin,
  logout,
  langs,
  lang,
  changeLang
}: IHeaderProps) => {

  const showDialog = () => {
    dialog.open(<div>test!!!!!</div>, {
      title: 'DEMO'
    });
  }

  const alert = () => {
    dialog.alert('Hello world!!!');
  }

  const confirm = () => {
    dialog.confirm('Are you agree?', {
      onCancel: () => {
        console.log('cancel');
      },
      onSuccess: () => {
        console.log('success');
      }
    })
  }

  return (
    <div>
      <button onClick={showDialog}>show</button>
      <button onClick={alert}>alert</button>
      <button onClick={confirm}>confirm</button>
      <p>Header</p>
    </div>
  )
};
