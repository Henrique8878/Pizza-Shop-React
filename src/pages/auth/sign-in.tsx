import { Button } from "@/components/ui/button"
import { Helmet } from "react-helmet-async"
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { Link,useSearchParams } from "react-router-dom"
import {z} from 'zod'
import {toast} from 'sonner'
import { Ghost } from "lucide-react"
import { SignInAuthenticate } from "@/api/sign-in"
import { useMutation } from "@tanstack/react-query"
import { Input } from "@/components/ui/input"

export function SignIn(){

    const [searchParams] = useSearchParams()

    const {mutateAsync:authenticate} = useMutation({
        mutationFn:SignInAuthenticate
    })

    const zodFormSignIn = z.object({
        email:z.string().email()
    })

    const {register,handleSubmit,formState:{isSubmitting}} = useForm<formSignIn>({
        resolver:zodResolver(zodFormSignIn),
        defaultValues:{
            email:searchParams.get('email')??''
        }
    })
 

    type formSignIn = z.infer<typeof zodFormSignIn>

    async function handleSignIn(data:formSignIn){
        authenticate({email:data.email})
        await new Promise((resolve)=>setTimeout(resolve,2000))
        toast.success('Enviamos um link de autenticação para seu e-mail',{
            action:{
                label:'Reenviar',
                onClick:()=>handleSignIn(data)
            }
        })
    }
    return(
        <>
            <Helmet title="SignIn"/>
            <Button asChild variant="ghost">
                <Link to="/sign-up" className="absolute right-14 top-14">Novo estabelecimento</Link>
            </Button>
            <div className="flex justify-center items-center h-screen">
                <div className="w-[23rem] space-y-4">
                    <section className="flex flex-col gap-2">
                        <h1 className="text-3xl text-center font-medium">Acessar Painel</h1>
                        <span className="text-center">Acompanhe suas vendas pelo painel do parceiro!</span>
                    </section>
                    <form action="" className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="inp_email" className="text-foreground font-medium">Seu e-mail</label>
                            <Input type="email" className="border p-1 rounded-md outline-none" {...register('email')}/>
                        </div>
                        <Button className="w-full" disabled = {isSubmitting}>Acessar painel</Button>
                    </form>
                </div>
            </div>
        </>
    )
}