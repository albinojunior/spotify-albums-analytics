import { buildToken, getBearerToken } from '../utils/auth';
import { getStorageToken, isValidToken, setStorageToken } from '../utils/auth';

const { REACT_APP_AUTH_URL, REACT_APP_AUTH_TOKEN } = process.env;

export function isAuthenticated(): boolean {
  const token = getStorageToken();
  if (!token) return false;
  return isValidToken(token);
}

export async function getAuthorizationToken() {
  if (!isAuthenticated()) {
    return await requestAcessToken();
  }
  return getBearerToken(getStorageToken());
}

export async function requestAcessToken() {
  try {
    const url = REACT_APP_AUTH_URL || '';
    const body = 'grant_type=client_credentials';

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${REACT_APP_AUTH_TOKEN}`,
        'content-type': 'application/x-www-form-urlencoded',
      },
      body
    });

    const data = await res.json();
    const token = buildToken(data);
    setStorageToken(token);
    return getBearerToken(token);
  } catch (error) {
    console.log(error);
  }
}
