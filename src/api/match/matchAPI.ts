import axiosInstance from "../axios";
import { Like, Match } from "./types/like";


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


export async function getMatches( token: string) {

    const { data } = await axiosInstance.get<Match[]>(`/match`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )

    return data;
}