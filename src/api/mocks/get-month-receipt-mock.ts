import {http,HttpResponse} from 'msw'
import { GetMonthOrdersAmountBody } from '../get-month-receipt'

export const GetMonthReceiptMock = http.get<never,never,GetMonthOrdersAmountBody>("/metrics/month-receipt",async ()=>{
    return HttpResponse.json({
        receipt:20000,
        diffFromLastMonth:-5
    })
})