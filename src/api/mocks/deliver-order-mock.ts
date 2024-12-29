import {http,HttpResponse} from 'msw'
import { ApproveOrderBody } from '../approve-order'
import { DeliverOrderBody } from '../deliver-order'

export const DeliverOrdersMock = http.patch<DeliverOrderBody,never,never>('/orders/:orderId/deliver',async ({params})=>{
    if(params.orderId==='error-order-id'){
        return new HttpResponse(null,{status:400})
    }

    return new HttpResponse(null,{status:204})
})