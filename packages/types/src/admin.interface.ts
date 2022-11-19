export declare interface IAdmin {
    username: string;
    hash: string;
    role: 'root' | 'admin'
}
export declare interface IAdminCreate {
    username: string;
    password: string;
    role: 'root' | 'admin'
}
export declare interface IAdminData {
    id: string;
    username: string;
    role: 'root' | 'admin'
}
