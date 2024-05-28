export interface IAuthService {
  login(request: TLoginRequest): Promise<TLoginResponse | undefined>;
}

export type TLoginRequest = {
  email: string;
  password: string;
};

export type TLoginResponse = {};
