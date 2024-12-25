import { api } from "@/lib/axios";

type GetDailyReceiptInPeriodBody = {
    date: string;
    receipt: number;
}[]


interface GetDailyReceiptInPeriodProps{
    from:Date | undefined,
    to:Date | undefined
}

export async function GetDailyReceiptInPeriod({from,to}:GetDailyReceiptInPeriodProps){
    const response = await api.get<GetDailyReceiptInPeriodBody>('/metrics/daily-receipt-in-period',{
        params:{
            from,
            to
        }
    })
    return response.data
}

