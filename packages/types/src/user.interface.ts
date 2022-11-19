import { UserRole } from './common';
export declare interface IUser {
    username: string;
    hash: string;
    role: UserRole
}
export declare interface IUserCreate {
    username: string;
    password: string;
}
export declare interface IUserData {
    id: string;
    username: string;
    role: UserRole
}
