import { IAction } from './action';

export namespace IAuth {
    export interface State {
        tokens?: Tokens;
        walletAddress?: string|null;
    }

    export interface Tokens {
        accessToken: string;
        refreshToken: string;
    }

    // /auth/refresh
    export interface RefreshPayload {
        refreshToken: string;
    }

    export type RefreshResponseSuccess = Tokens;

    // slice
    export type SetTokensAction = IAction<IAuth.Tokens>;
    export type SetWalletAddress = IAction<string>;
}
