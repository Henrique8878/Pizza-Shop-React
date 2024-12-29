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
import { GetProfileMock } from './get-profile-mock'
import { GetManagedRestaurantMock } from './get-managed-restaurant-mock'
import { UpdateProfileMock } from './update-profile-mock'
import { GetOrdersMock } from './get-orders-mock'
import { GetOrderDetailsBody } from '../get-order-details'
import { GetOrderDetailsMock } from './get-order-details-mock'
import { ApproveOrdersMock } from './approve-order-mock'
import { CancelOrdersMock } from './cancel-order-mock'
import { DispatchOrdersMock } from './dispatch-order-mock'
import { DeliverOrdersMock } from './deliver-order-mock'

export const worker = setupWorker(signInMock,
    GetDailyReceiptInPeriodMock,
    GetMonthCanceledOrdersAmountMock,
    GetMonthOrdersAmountMock,
    GetMonthReceiptMock,
    RegisterRestaurantMock,
    GetPopularProductsMock,
    GetDayOrdersAmountMock,
    GetProfileMock,
    GetManagedRestaurantMock,
    UpdateProfileMock,
    GetOrdersMock,
    GetOrderDetailsMock
)

export async function enableMSW(){
    if(env.MODE!=="test"){
        return
    }
    await worker.start()
}