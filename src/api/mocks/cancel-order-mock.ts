import {http,HttpResponse} from 'msw'
import { ApproveOrderBody } from '../approve-order'
import { CancelOrderBody } from '../cancel-order'

export const CancelOrdersMock = http.patch<CancelOrderBody,never,never>('/orders/:orderId/cancel',async ({params})=>{
    if(params.id==='error-order-id'){
        return new HttpResponse(null,{status:400})
    }

    return new HttpResponse(null,{status:204})
})