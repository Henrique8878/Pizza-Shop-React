import { api } from "@/lib/axios";

export interface BodySignIn{
    email:string
}

export async function SignInAuthenticate({email}:BodySignIn){
    return api.post('authenticate',{email})
}