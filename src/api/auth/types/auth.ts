export interface User{
    email:string,
    password?:string,
    firstname:string,
    lastname:string,
    images?:Image[]
}

export interface Image{
    contentType:string;
    key:string;
    location:string;
}
export interface loginResponse{
    user:User,
    userToken:string
}