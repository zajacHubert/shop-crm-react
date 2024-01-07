import {
  UserFormLogin,
  UserFormRegister,
  UserLoginResponse,
  UserRegisterResponse,
} from '../types/user';
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

export const register = async (
  userFormRegister: UserFormRegister
): Promise<UserRegisterResponse> => {
  const res = await shopApiInstance.post('/register', userFormRegister);
  if (res.status >= 200 && res.status < 300) {
    return res.data as UserRegisterResponse;
  } else {
    throw new Error(`Login failed`);
  }
};
