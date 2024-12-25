import { api } from "@/lib/axios";

interface GetMonthCanceledOrdersAmountBody{
    amount: number
    diffFromLastMonth: number
}

export async function GetMonthCanceledOrdersAmount(){
    const response = await api.get<GetMonthCanceledOrdersAmountBodyPcance>('/metrics/month-canceled-orders-amount')
    return response.data
}