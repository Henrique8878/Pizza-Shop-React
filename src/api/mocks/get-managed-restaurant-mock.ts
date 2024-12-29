import {http,HttpResponse} from 'msw'
import { getManagedRestaurantBody } from '../get-managed-restaurant'

export const GetManagedRestaurantMock = http.get<never,never,getManagedRestaurantBody>('/managed-restaurant',()=>{
    return HttpResponse.json({
        id:"customer-id-user",
        managerId:"Id-manager",
        name:"Pizza Shop",
        description:"Restaurante de pizza",
        createdAt:new Date(),
        updatedAt:null
    })
})