import {http,HttpResponse} from 'msw'
import { GetMonthOrdersAmountBody } from '../get-month-orders-amount'

export const GetMonthOrdersAmountMock = http.get<never,never,GetMonthOrdersAmountBody>("/metrics/month-orders-amount",async ()=>{
    return HttpResponse.json({  
        amount:200,
        diffFromLastMonth:5
    })
})