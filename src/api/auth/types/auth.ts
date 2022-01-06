export interface User {
    _id: string,
    email: string,
    password?: string,
    firstname: string,
    lastname: string,
    images?: Image[],
    province: string,
    bio?: string,
    location?: Location,
    gender: string,
    birthdate: string

}

export interface Location {
    type: string;
    coordinates: [longitude: number, latitude: number]
}
export interface Image {
    contentType: string;
    key: string;
    location: string;
}
export interface loginResponse {
    user: User,
    userToken: string
}