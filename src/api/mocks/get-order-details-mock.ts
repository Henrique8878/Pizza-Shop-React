import {http,HttpResponse} from 'msw'
import { DataGetDetails, GetOrderDetailsBody } from '../get-order-details'

export const GetOrderDetailsMock = http.get<GetOrderDetailsBody,never,DataGetDetails>(`/orders/:orderId`,({params})=>{
    return HttpResponse.json({
        id:params.id,
        customer:{
            name:'Henrique',
            email:'henriquetomazparticular@gmail.com',
            phone:'35999047684'
        },
        createdAt:new Date().toISOString(),
        status:'pending',
        totalInCents:10000,
        orderItems:[
            {
                id:'order-item-1',
                product:{
                    name:'Pizza Marguerita'
                },
                quantity:2,
                priceInCents:6000
            },
            {
                id:'order-items-2',
                product:{
                    name:'Pizza Calabresa'
                },
                priceInCents:4000,
                quantity:3
            }
            
        ]
        
    })
})