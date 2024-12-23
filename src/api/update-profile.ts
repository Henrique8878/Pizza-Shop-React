import { api } from "@/lib/axios";

interface updateProfileBody{
    name:string,
    description:string
}

export async function UpdateProfile({name,description}:updateProfileBody){
    await api.put('/profile',{
        name,
        description
    })
}