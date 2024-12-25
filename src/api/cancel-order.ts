import { api } from "@/lib/axios";

interface CancelOrderBody{
    id:string
}

export async function CancelOrder({id}:CancelOrderBody){
    await api.patch(`/orders/${id}/cancel`)
}

