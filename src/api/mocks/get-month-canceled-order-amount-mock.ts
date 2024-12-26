import {http,HttpResponse} from 'msw'
import { GetMonthCanceledOrdersAmountBody } from '../get-month-canceled-order-amount'

export const GetMonthCanceledOrdersAmountMock = http.get<never,never,GetMonthCanceledOrdersAmountBody>("/metrics/month-canceled-orders-amount",async ()=>{
    return HttpResponse.json({
        amount:10,
        diffFromLastMonth:20
    })
})