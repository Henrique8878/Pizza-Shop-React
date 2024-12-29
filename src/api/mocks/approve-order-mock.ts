import {http,HttpResponse} from 'msw'
import { ApproveOrderBody } from '../approve-order'

export const ApproveOrdersMock = http.patch<ApproveOrderBody,never,never>('/orders/:orderId/approve',async ({params})=>{
    if(params.id==='error-order-id'){
        return new HttpResponse(null,{status:400})
    }

    return new HttpResponse(null,{status:204})
})