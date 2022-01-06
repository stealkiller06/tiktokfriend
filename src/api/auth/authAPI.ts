import axiosInstance from "../axios";
import { SignUpDto } from "./dto/signup.dto";
import { loginResponse, User } from "./types/auth";

export async function login(email: string, password: string) {

    const { data } = await axiosInstance.post<loginResponse>("/auth/login", {
        email,
        password
    })

    return data;
}

export async function signUp(signUpDto: SignUpDto) {

    const { data } = await axiosInstance.post<loginResponse>("/auth/signup", {
        ...signUpDto,
        country: 'DO'
    })

    return data;
}
export async function getCurrentUser(token: string) {

    const { data } = await axiosInstance.get<User>("/auth/user", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data;
}