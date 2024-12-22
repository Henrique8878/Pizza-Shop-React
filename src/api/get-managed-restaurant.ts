import { api } from "@/lib/axios";

interface getManagedRestaurantBody{
    name: string;
    id: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    description: string | null;
    managerId: string | null;
}
 
export async function getManagedRestaurant(){
    const response = await api.get<getManagedRestaurantBody>("/managed-restaurant")
    return response.data
}