import { api } from "@/lib/axios";

export async function SignOut(){
    api.post('/sign-out')
}