import { api } from "@/lib/axios";

interface GetMonthOrdersAmountBody{
    receipt: number
    diffFromLastMonth: number
}

export async function GetMonthReceipt(){
    const response = await api.get<GetMonthOrdersAmountBody>('/metrics/month-receipt')
    return response.data
}