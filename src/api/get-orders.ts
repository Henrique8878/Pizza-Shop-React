import { api } from "@/lib/axios";

interface pageIndexParams{
    pageIndex:number
}

interface GetOrdersBody{
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

export async function GetOrders({pageIndex}:pageIndexParams){
    const response = await api.get<GetOrdersBody>("/orders",{
        params:{
            pageIndex
        }
    })

    return response.data
}