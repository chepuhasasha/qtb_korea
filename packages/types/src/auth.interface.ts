import { UserRole } from "./common";

export interface IAuthData {
    user_id: string;
    username: string;
    refresh_token: string;
    refresh_token_exp: string;
    role: UserRole
}
export interface ILogin {
    username: string;
    password: string;
}
