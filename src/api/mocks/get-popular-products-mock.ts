import {http,HttpResponse} from 'msw'
import { GetPopularProducts } from '../get-popular-products'

export const GetPopularProductsMock = http.get<never,never,GetPopularProducts>("/metrics/popular-products",async()=>{
    return HttpResponse.json([
        {product:"Pizza 1",amount:20},
        {product:"Pizza 2",amount:30},
        {product:"Pizza 3",amount:60},
        {product:"Pizza 4",amount:10},
        {product:"Pizza 5",amount:5},
        {product:"Pizza 6",amount:15},
        {product:"Pizza 7",amount:50}
    ])
})