import moment from 'moment';

export interface Token {
  access_token: string;
  token_type: string;
  expires_in: number | string;
  expires_at?: number | string;
}

export function getStorageToken(): Token {
  const stringToken = localStorage.getItem('auth_token') || undefined;
  return stringToken ? JSON.parse(stringToken) : null;
}

export function getBearerToken(token: Token): string {
  return `${token.token_type} ${token.access_token}`;
}

export function setStorageToken(token: Token): void {
  localStorage.setItem('auth_token', JSON.stringify(token));
}

export function buildToken(token: Token): Token {
  const now = moment();
  return {
    ...token,
    expires_at: now.add(token.expires_in, 'seconds').unix(),
  };
}

export function isValidToken(token: Token): boolean {
  const expires = token.expires_at || 0;
  return expires > moment().unix();
}
