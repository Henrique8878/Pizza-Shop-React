import {http,HttpResponse} from 'msw'
import { ApproveOrderBody } from '../approve-order'
import { DispatchOrderBody } from '../dispatch-orders'

export const DispatchOrdersMock = http.patch<DispatchOrderBody,never,never>('/orders/:orderId/dispatch',async ({params})=>{
    if(params.id==='error-order-id'){
        return new HttpResponse(null,{status:400})
    }

    return new HttpResponse(null,{status:204})
})