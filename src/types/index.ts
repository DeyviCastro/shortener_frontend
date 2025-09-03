import { Graphics } from '../views/Graphics';
export type User ={
    id: string,
    name: string,
    email: string
    password: string
}

export type RegisterForm = Pick<User, 'name' | 'email' | 'password'> & {
    confirmPassword: string
}

export type LoginForm = Pick<User, 'email' | 'password'>

export type Link = {
    _id: string,
    originalUrl: string,
    slug: string,
    user: string
    createdAt: string,
    clicks: number
}

export type newLink = Pick<Link, 'originalUrl' >

export type enlace = Pick<Link, 'slug'> & {
    msg: string
}

export type Graphics = Pick<Link, 'slug' | 'clicks'>