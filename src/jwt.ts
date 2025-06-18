import { jwtDecode } from 'jwt-decode';

export function parseJwt(jwt: string) {
  return jwtDecode(jwt);
}