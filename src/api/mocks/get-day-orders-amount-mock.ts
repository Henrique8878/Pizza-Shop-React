import {http,HttpResponse} from 'msw'
import { GetDayOrdersAmountBody } from '../get-day-orders-amount'

export const GetDayOrdersAmountMock = http.get<never,never,GetDayOrdersAmountBody>('/metrics/day-orders-amount',async ()=>{
    return HttpResponse.json({
        amount:30,
        diffFromYesterday:10
    })
})