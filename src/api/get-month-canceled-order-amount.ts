import { api } from "@/lib/axios";

interface GetMonthCanceledOrdersAmountBody{
    amount: number
    diffFromLastMonth: number
}

export async function GetMonthCanceledOrdersAmount(){
    const response = await api.get<GetMonthCanceledOrdersAmountBody>('/metrics/month-canceled-orders-amount')
    return response.data
}