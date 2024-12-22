import { api } from "@/lib/axios";

interface BodyRegisterRestaurants{
    restaurantName:string,
    managerName:string,
    phone:string,
    email:string
}

export async function RegisterRestaurant({restaurantName,managerName,phone,email}:BodyRegisterRestaurants){
    api.post('/restaurants',{
        restaurantName,
        managerName,
        phone,
        email
    })
}