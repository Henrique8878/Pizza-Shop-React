import { api } from "@/lib/axios";

interface DispatchOrderBody{
    id:string
}

export async function DispatchOrder({id}:DispatchOrderBody){
    await api.patch(`/orders/${id}/dispatch`)
}