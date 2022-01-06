import axiosInstance from "../axios";
import { Like } from "./types/like";


export async function likeUser(userId: string, type: string, token: string) {

    const { data } = await axiosInstance.post<Like>(`/match/like`, {
        likeTo: userId,
        type
    },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )

    return data;
}