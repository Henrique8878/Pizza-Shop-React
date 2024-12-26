import {http,HttpResponse} from 'msw'
import { BodySignIn } from '../sign-in'

export const signInMock = http.post<never,BodySignIn>('/authenticate',async ({request})=>{
    const {email} = await request.json()

    if(email==="henriquetomazparticular@gmail.com"){
        return new HttpResponse(null,{
            status:200,
            headers:{
                'Set-Cookie':'auth=sample-jwt'
            }
        })
    }
    return new HttpResponse(null,{
        status:401
    })
})