import { api } from "@/lib/axios";

export interface GetDayOrdersAmountBody{
    amount: number
    diffFromYesterday:number 
}

export async function GetDayOrdersAmount(){
    const response = await api.get<GetDayOrdersAmountBody>('/metrics/day-orders-amount')
    return response.data
}