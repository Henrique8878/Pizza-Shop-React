import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"  
import { X } from "lucide-react"
import {z} from 'zod'
import {useForm,Controller} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { useSearchParams } from "react-router-dom"

export function OrderTableFilter(){

    const filterDataSchema = z.object({
        orderId:z.string(),
        customerName:z.string(),
        status:z.string()
    })

    type filterDataSchema = z.infer<typeof filterDataSchema>

    const {register,handleSubmit,reset,control}  = useForm<filterDataSchema>({
        resolver:zodResolver(filterDataSchema)
    })

    const [searchParams,setSearchParams] = useSearchParams()
    function handleSubmitFilter({orderId,customerName,status}:filterDataSchema){
        setSearchParams((prev)=>{
            if(orderId){
                prev.set('orderId',orderId)
            }else{
                prev.delete('orderId')
            }

            if(customerName){
                prev.set('customerName',customerName)
            }else{
                prev.delete('customerName')
            }

            if(status){
                prev.set('status',status)
            }else{
                prev.delete('status')
            }

            prev.set('page','1')
            return prev
        })
    }

    function removeParamsUrlFilter(){
        setSearchParams((prev)=>{
            prev.delete('orderId')
            prev.delete('customerName')
            prev.delete('status')
            prev.set('page','1')
          

            return prev
        })

        reset({
            orderId:"",
            customerName:"",
            status:""
        })
    }
    return(
        <form className="flex" onSubmit={handleSubmit(handleSubmitFilter)}>
            <div className="flex items-center gap-3">
                <span>Filtros: </span>
                <Input type="text"id="" placeholder="ID do pedido" className="h-8 w-auto" {...register('orderId')}/>
                <Input type="text"id="" placeholder="Nome do cliente" className="h-8 w-[20rem]" {...register('customerName')}/>
                <Controller 
                name="status" 
                control={control}
                render={({field:{name,onChange,value,disabled}})=>{
                    return(
                        <Select defaultValue="all" name={name} onValueChange={onChange} value={value} disabled={disabled}>
                        <SelectTrigger className="w-[11rem]">
                            <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todos os status</SelectItem>
                            <SelectItem value="pending">Pendente</SelectItem>
                            <SelectItem value="canceled">Cancelado</SelectItem>
                            <SelectItem value="processing">Em preparo</SelectItem>
                            <SelectItem value="delivering">Em entrega</SelectItem>
                            <SelectItem value="delivered">Entregue</SelectItem>
                        </SelectContent>
                    </Select>
                    )
                }}
                >
                    
                </Controller>
                <Button variant="secondary" type="submit">
                    <Search/>
                    <span>Filtrar resultados</span>
                </Button>
                <Button variant="outline" type="button" onClick={()=>removeParamsUrlFilter()}>
                    <X/>
                    <span>Remover filtros</span>
                </Button>
            </div>
        </form>
    )
}

