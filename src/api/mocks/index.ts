import {setupWorker} from 'msw/browser'
import { env } from '@/env'
import { signInMock } from './sign-in-mocks'
import { GetDailyReceiptInPeriodMock } from './get-daily-receipt-in-period-mock'
import { GetMonthCanceledOrdersAmountMock } from './get-month-canceled-order-amount-mock'
import { GetMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { GetMonthReceiptMock } from './get-month-receipt-mock'
import { RegisterRestaurantMock } from './register-restaurant-mock'
import { GetPopularProductsMock } from './get-popular-products-mock'
import { GetDayOrdersAmountMock } from './get-day-orders-amount-mock'

export const worker = setupWorker(signInMock,
    GetDailyReceiptInPeriodMock,
    GetMonthCanceledOrdersAmountMock,
    GetMonthOrdersAmountMock,
    GetMonthReceiptMock,
    RegisterRestaurantMock,
    GetPopularProductsMock,
    GetDayOrdersAmountMock
)

export async function enableMSW(){
    if(env.MODE!=="test"){
        return
    }
    await worker.start()
}