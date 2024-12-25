import { api } from "@/lib/axios";

interface pageIndexParams{
    pageIndex:number,
    orderId:string | null,
    customerName:string | null,
    status:string|null
}

export interface GetOrdersBody{
    orders: {
        orderId: string;
        createdAt: string;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        customerName: string;
        total: number;
    }[];
    meta: {
        pageIndex: number;
        perPage: number;
        totalCount: number;
    };
}

export async function GetOrders({pageIndex,customerName,orderId,status}:pageIndexParams){
    const response = await api.get<GetOrdersBody>("/orders",{
        params:{
            pageIndex,
            customerName,
            orderId,
            status
        }
    })

    return response.data
}