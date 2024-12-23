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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { UpdateProfile } from "@/api/update-profile"
import { QueryClient } from "@tanstack/react-query"



  export function StoreDialogProfile(){

        const queryClient = useQueryClient()

        function UpdateProfileCached({name,description}:schemaValidationProfile){
             const cached = queryClient.getQueryData<schemaValidationProfile>(['managed-restaurant'])

             
                if(cached){
                    queryClient.setQueryData(['managed-restaurant'],{
                        ...cached,
                        name,
                        description
                    })
                }

                return { cached }
        }

        const {mutateAsync:UpdateProfileFn} = useMutation({
            mutationFn:UpdateProfile,
            onMutate(variables) {
               const {cached} = UpdateProfileCached({name:variables.name,description:variables.description})

               return {previousData:cached}
            },
            onError(_, __, context) {
                if(context?.previousData){
                    UpdateProfileCached(context.previousData)
                }
            },
        })

    const {data:ManagedRestaurantData} = useQuery({
        queryKey:['managed-restaurant'],
        queryFn:getManagedRestaurant,
        staleTime:Infinity
    })

    const schemaValidationProfile = z.object({
        name:z.string().min(1),
        description:z.string()
    })

    type schemaValidationProfile = z.infer<typeof schemaValidationProfile>

    const {register,handleSubmit} = useForm<schemaValidationProfile>({
        resolver:zodResolver(schemaValidationProfile),
        values:{
            name:ManagedRestaurantData?.name??"",
            description:ManagedRestaurantData?.description??""
        }
    })

    async function HandleUpdateProfile(data:schemaValidationProfile){
        try{
            await UpdateProfileFn({
                name:data.name,
                description:data.description
            })

            toast.success("Perfil atualizado com sucesso!")
        }catch{
            toast.error("Erro ao atualizar o perfil")
        }
    }
    return(
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Perfil da loja</DialogTitle>
                <DialogDescription>Atualize as informações do seu estabelecimento visíveis ao seu cliente</DialogDescription>
            </DialogHeader>

            <form action="" className="flex flex-col space-y-4" onSubmit={handleSubmit(HandleUpdateProfile)}>
                <section className="flex flex-col gap-2">
                    <div className="flex justify-end items-center gap-2">
                        <Label>Nome</Label>
                        <Input type="text" className="w-[60%] outline-none" {...register('name')}/>
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
            

