import { api } from "@/lib/axios";

export interface GetOrderDetailsBody{
    id:string
}


export interface DataGetDetails{
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    id: string;
    createdAt: string;
    totalInCents: number;
    customer: {
        name: string;
        email: string;
        phone: string | null;
    };
    orderItems:{
        id: string,
        priceInCents: number,
        quantity: number,
        product:{
            name:string
        }
    }[];
}

export async function GetOrderDetails({id}:GetOrderDetailsBody){
    const response = await api.get<DataGetDetails>(`/orders/${id}`)

    return response.data
}

