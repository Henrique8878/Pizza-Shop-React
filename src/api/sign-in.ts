import { api } from "@/lib/axios";

interface BodySignIn{
    email:string
}

export async function SignInAuthenticate({email}:BodySignIn){
    return api.post('authenticate',{email})
}