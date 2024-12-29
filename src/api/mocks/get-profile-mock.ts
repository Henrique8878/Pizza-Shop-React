import {http,HttpResponse} from 'msw'
import { getProfileBody } from '../get-profile'

export const GetProfileMock = http.get<never,never,getProfileBody>('/me',()=>{
    return HttpResponse.json({
        id:"customer-user-id",
        name:"Henrique Araújo",
        email:"henriquetomazparticular@gmail.com",
        phone:"4352345435",
        role:"manager",
        createdAt:new Date(),
        updatedAt:null
    })
})