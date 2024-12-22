import { Button } from "@/components/ui/button"
import { Helmet } from "react-helmet-async"
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {useNavigate,Link} from 'react-router-dom'
import {z} from 'zod'
import {toast} from 'sonner'
import { useMutation } from "@tanstack/react-query"
import { RegisterRestaurant } from "@/api/register-restaurant"
import { Input } from "@/components/ui/input"

export function Signup(){

    const {mutateAsync:RegisterFn} = useMutation({
        mutationFn: RegisterRestaurant  
    })

    const navigate = useNavigate()
    const zodFormSignIn = z.object({
        restaurantName:z.string(),
        managedName:z.string(),
        email:z.string().email(),
        phone:z.string()
    })

    const {register,handleSubmit,formState:{isSubmitting}} = useForm<formSignIn>({
        resolver:zodResolver(zodFormSignIn)
    })
  
    type formSignIn = z.infer<typeof zodFormSignIn>

    async function handleSignIn(data:formSignIn){
       await  RegisterFn({
            restaurantName:data.restaurantName,
            managerName:data.managedName,
            phone:data.phone,
            email:data.email
        })
        try{
            await new Promise((resolve)=>setTimeout(resolve,2000))
            toast.success('Cadastro finalizado com sucesso!',{
                action:{
                    label:'Login',
                    onClick:()=>{navigate(`/sign-in?email=${data.email}`)}
                }
            })
        }catch{
            toast.error('Erro no envio das credenciais')
        }
    }

        
    return(
        <>
            <Helmet title="Signup"/>
            <Button asChild variant="ghost">
                <Link to="/sign-in" className="absolute right-14 top-14">Fazer login</Link>
            </Button>
            <div className="flex justify-center items-center h-screen">
                <div className="w-[23rem] space-y-4">
                    <section className="flex flex-col gap-2">
                        <h1 className="text-3xl text-center font-medium">Criar conta grátis</h1>
                        <span className="text-center">Seja um parceiro e comece suas vendas!</span>
                    </section>
                    <form action="" className="space-y-6" onSubmit={handleSubmit(handleSignIn)}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="inp_email" className="text-foreground font-medium">Nome do estabelecimento</label>
                            <Input type="text" className="border p-1 rounded-md outline-none" {...register('restaurantName')}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="inp_email" className="text-foreground font-medium">Seu nome</label>
                            <Input type="text" className="border p-1 rounded-md outline-none" {...register('managedName')}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="inp_email" className="text-foreground font-medium">Seu e-mail</label>
                            <Input type="email" className="border p-1 rounded-md outline-none" {...register('email')}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="inp_email" className="text-foreground font-medium">Seu celular</label>
                            <Input type="tel" className="border p-1 rounded-md outline-none" {...register('phone')}/>
                        </div>
                        <Button className="w-full" disabled = {isSubmitting}>Finalizar cadastro</Button>
                    </form>
                    <p className="text-center">Ao continuar, você concorda com nossos<br/> <a href="" className="underline underline-offset-4">termos de serviço</a> e <a href="" className="underline underline-offset-4">políticas de privacidade</a></p>
                </div>
            </div>
        </>
    )
}