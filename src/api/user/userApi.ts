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
