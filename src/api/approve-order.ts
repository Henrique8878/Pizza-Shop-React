import { api } from "@/lib/axios";

interface ApproveOrderBody{
    id:string
}

export async function ApproveOrder({id}:ApproveOrderBody){
    await api.patch(`/orders/${id}/approve`)
}