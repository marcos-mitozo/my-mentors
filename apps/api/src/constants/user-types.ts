export interface IUser {
    id?: string
    email: string
    username: string
    passwordHash: string
    role?: string
}

export interface IUserPayload {
    email?: string
    username?: string
    passwordHash?: string
    role?: string
}