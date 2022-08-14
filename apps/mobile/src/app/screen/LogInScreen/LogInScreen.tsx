import React from 'react';
import { LogIn as LogInUi } from '@finance/ui-mobile';
import { actions } from '@finance/redux';

export const LogInScreen = () => {
  return (
    <LogInUi setTokens={actions.auth.setTokens} />
  )
}
