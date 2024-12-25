import { api } from "@/lib/axios";

interface GetMonthOrdersAmountBody{
    amount: number
    diffFromLastMonth: number
}

export async function GetMonthOrdersAmount(){
    const response = await api.get<GetMonthOrdersAmountBody>('/metrics/month-orders-amount')
    return response.data
}