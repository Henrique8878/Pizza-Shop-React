import {http,HttpResponse} from 'msw'
import { BodyRegisterRestaurants } from '../register-restaurant'

export const RegisterRestaurantMock = http.post<never,BodyRegisterRestaurants>('/restaurants',async ({request})=>{
    const {restaurantName} = await request.json()

    if(restaurantName==="Pizza Shop"){
        return new HttpResponse(null,{
            status:201,
            headers:{
                'Set-Cookie':'auth=sample-jwt'
            }
        })
    }
    return new HttpResponse(null,{
        status:401
    })
})