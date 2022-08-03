import React from 'react';
import { useRouter } from 'next/router';
import { Footer, Header } from '@finance/ui';
import { actions, useAppSelector } from '@finance/redux';
import { langs } from '@finance/translate';

export interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const router = useRouter();
  const auth = useAppSelector((state) => state.auth.tokens);
  const lang = useAppSelector(state => state.settings.lang);

  const logout = () => {
    actions.auth.logout();
    router.push('/');
  };

  return (
    <>
      <div className="content">
        <Header
          isLogin={!!auth}
          logout={logout}
          langs={langs}
          lang={lang}
          changeLang={actions.settings.setLang}
        />

        {children}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};
