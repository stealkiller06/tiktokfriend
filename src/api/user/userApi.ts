import axiosInstance from "../axios";
import { loginResponse, User} from "../auth/types/auth";

export async function updateProfile(image:FormData,token:string){

    const {data} = await axiosInstance.post<User>("/users/image/upload", image,
    {
        headers:{
            Authorization:`Bearer ${token}`,
            "Content-Type":'multipart/form-data'
        }
    }
    )

    return data;
}


export async function getUsersByLocation(latitude:number,longitude:number, gender:string="",token:string){

    const {data} = await axiosInstance.get<User[]>("/users/by-location",
    {
        headers:{
            Authorization:`Bearer ${token}`,
            "Content-Type":'multipart/form-data'
        },
        params:{
            latitude,
            longitude,
            gender
        }
    }
    )

    return data;
}

export async function likeUser(userId:string, type:string,token:string){

    const {data} = await axiosInstance.get<User[]>(`/like/${userId}/${type}`,
    {
        headers:{
            Authorization:`Bearer ${token}`,
            "Content-Type":'multipart/form-data'
        }
    }
    )

    return data;
}