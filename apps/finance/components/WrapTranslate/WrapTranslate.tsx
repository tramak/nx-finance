import React, { useMemo } from 'react';
import { TranslateContext } from '@finance/translate';
import { useAppSelector } from '@finance/redux';

export const WrapTranslate = ({ children }: { children: React.ReactElement }) => {
  const lang = useAppSelector(state => state.settings.lang);
  const value = useMemo(() => ({ lang }), [ lang ]);

  return (
    <TranslateContext.Provider value={value}>
      {children}
    </TranslateContext.Provider>
  )
};
