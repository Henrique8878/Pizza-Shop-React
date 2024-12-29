import { api } from "@/lib/axios";

export interface CancelOrderBody{
    id:string
}

export async function CancelOrder({id}:CancelOrderBody){
    await api.patch(`/orders/${id}/cancel`)
}

