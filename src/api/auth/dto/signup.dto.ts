import {User} from '../types/auth'

export interface SignUpDto extends User{
    latitude:number,
    longitude:number
}
