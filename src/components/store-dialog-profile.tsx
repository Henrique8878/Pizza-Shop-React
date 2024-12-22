import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog" 
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { getManagedRestaurant } from "@/api/get-managed-restaurant"
import { useQuery } from "@tanstack/react-query"

  export function StoreDialogProfile(){

    const {data:ManagedRestaurantData} = useQuery({
        queryKey:['managed-restaurant'],
        queryFn:getManagedRestaurant
    })

    const schemaValidationProfile = z.object({
        restaurantName:z.string().min(1),
        description:z.string()
    })

    type schemaValidationProfile = z.infer<typeof schemaValidationProfile>

    const {register,handleSubmit} = useForm<schemaValidationProfile>({
        resolver:zodResolver(schemaValidationProfile),
        values:{
            restaurantName:ManagedRestaurantData?.name??"",
            description:ManagedRestaurantData?.description??""
        }
    })
    return(
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Perfil da loja</DialogTitle>
                <DialogDescription>Atualize as informações do seu estabelecimento visíveis ao seu cliente</DialogDescription>
            </DialogHeader>

            <form action="" className="flex flex-col space-y-4">
                <section className="flex flex-col gap-2">
                    <div className="flex justify-end items-center gap-2">
                        <Label>Nome</Label>
                        <Input type="text" className="w-[60%] outline-none" {...register('restaurantName')}/>
                    </div>
                    <div className="flex flex-col">
                    <div className="flex justify-end items-center gap-2">
                        <Label>Descrição</Label>
                        <Textarea className="w-[60%] outline-none" {...register('description')}/>
                    </div>
                    </div>
                </section>
                <DialogFooter className="flex">
                    <Button variant="ghost" type="button">Cancelar</Button>
                    <Button variant="success" type="submit">Salvar</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
  }
            

