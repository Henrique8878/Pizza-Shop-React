import {http,HttpResponse} from 'msw'
import { GetDailyReceiptInPeriodBody } from '../get-daily-receipt-in-period'


export const GetDailyReceiptInPeriodMock = http.get<never,never,GetDailyReceiptInPeriodBody>("/metrics/daily-receipt-in-period",async ()=>{
    return HttpResponse.json([
        {date:"22/05/2001",receipt:200},
        {date:"23/05/2001",receipt:100},
        {date:"24/05/2001",receipt:300},
        {date:"25/05/2001",receipt:500},
        {date:"26/05/2001",receipt:700},
        {date:"27/05/2001",receipt:50},
        {date:"28/05/2001",receipt:80}
    ])
})
