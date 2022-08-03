export namespace IResponse {
  export type Response<P, E = unknown> = ResponseSuccess<P> | ResponseError<E>;

  export interface ResponseError<E = unknown> {
    code: Codes;
    error?: string;
    message?: string; // Старая реализация
    messages?: Errors;
    payload?: E;
  }

  export type ResponseSuccess<P> = {
    code: Codes;
    payload: P;
    messages?: Messages;
  }

  export enum Codes {
    // 200
    SUCCESS = '200:SUCCESS',
    // 400
    INVALID_FORMAT = '400:INVALID_FORMAT',
    REQUIRED = '400:REQUIRED',
    // 401
    AUTH = '401:NOT_AUTHORIZED',
    TOKEN_EXPIRED = '401:TOKEN_EXPIRED',
    INVALID_TOKEN = '401:INVALID_TOKEN',
    // 403
    BLOCKED = '403:RESOURCE_IS_BLOCKED',
    DENIED = '403:FORBIDDEN',
    // 404
    NOT_FOUND = '404:NOT_FOUND',
    // 406
	  FAILED_FIELDS = '406:FAILED_FIELDS',
    // 409
    WAS_MINTED = '409:WAS_MINTED',
    // 500
    SERVER_ERROR = '500:SERVER_ERROR',
    // и другие...
  }

  export enum MessageType {
    ERROR = 'error',
    INFO = 'info'
  }

  export interface Message {
    type?: MessageType;
    message: string;
  }

  export interface Error extends Message {
    field?: string;
  }

  export type Messages = Array<Message>;
  export type Errors = Array<Error>;
}
