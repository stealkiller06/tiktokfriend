import axiosInstance from "../axios";
import { loginResponse, User } from "./types/auth";

export async function login(email:string, password:string){

    const {data} = await axiosInstance.post<loginResponse>("/auth/login", {
        email,
        password
    })

    return data;
}

export async function getCurrentUser(token:string){

    const {data} = await axiosInstance.get<User>("/auth/user",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return data;
}