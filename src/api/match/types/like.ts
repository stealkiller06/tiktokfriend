import { User } from "../../auth/types/auth";

export interface Like {
    user: string,
    likeTo: string,
    type: string
}


export interface Match{
    _id:string,
    to:User,
    from:User,
    createdAt:number,
}