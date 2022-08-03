import { IAuth } from '@finance/types';

export interface State {
  tokens?: IAuth.Tokens;
  walletAddress?: string | null;
}
