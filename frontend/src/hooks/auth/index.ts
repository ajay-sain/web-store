import { instance } from "../config";
import { loginRepo, signupRepo , passwordRepo } from "./const";
import { LoginRequest, SignupRequest } from "./model";


export const login = (data: LoginRequest) => instance({
    method: loginRepo.method,
    url: loginRepo.url,
    data
  });

export const register = (data: SignupRequest) => instance({
    method: signupRepo.method,
    url: signupRepo.url,
    data
  });

export const forgotPassword = (data: string) => instance({
    method: passwordRepo.method,
    url: passwordRepo.url,
    data
  });