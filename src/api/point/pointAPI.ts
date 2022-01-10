import axiosInstance from "../axios";
import { GetPointResponse } from "./types/point";


export async function getPointsTotal( token: string) {

    const { data } = await axiosInstance.get<GetPointResponse>(`/points`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    )

    return data;
}