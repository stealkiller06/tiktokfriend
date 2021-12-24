import {SchemaOf,object,string} from 'yup';

export interface loginFormValues{
    email:string,
    password:string
}

export const loginFormSchema : SchemaOf<loginFormValues> = object({
    email:string().required("Este campo es requerido"),
    password:string().required("Este campo es requerido")
})