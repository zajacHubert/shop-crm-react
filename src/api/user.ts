import { UserFormLogin, UserLoginResponse } from '../types/user';
import { shopApiInstance } from './shopApi';

export const login = async (
  userFormLogin: UserFormLogin
): Promise<UserLoginResponse> => {
  const res = await shopApiInstance.post('/login', userFormLogin);
  if (res.status >= 200 && res.status < 300) {
    return res.data as UserLoginResponse;
  } else {
    throw new Error(`Login failed`);
  }
};
