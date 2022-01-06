import {SchemaOf,object,string,ref} from 'yup';

export interface signUpFormValues{
    firstname:string,
    lastname:string,
    tiktokAccount:string,
    birthdate:string,
    email:string,
    password:string
    repeatPassword:string,
    province:string,
    bio?:string,
    gender:string
}

export const signUpFormSchema : SchemaOf<signUpFormValues> = object({
    firstname:string().required("Este campo es requerido"),
    lastname:string().required("Este campo es requerido"),
    tiktokAccount:string().required("Este campo es requerido"),
    birthdate:string().required("Este campo es requerido"),
    bio:string().optional(),
    province:string().required("Este campo es requerido"),
    email:string().required("Este campo es requerido"),
    password:string().required("Este campo es requerido"),
    repeatPassword:string().oneOf([ref('password'), null], 'Las contraseñas deben ser iguales').required("Este campo es requerido"),
    gender:string().required("Este campo es obligatorio")

})