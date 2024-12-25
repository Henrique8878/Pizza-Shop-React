import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  import { useQuery } from "@tanstack/react-query"
  import { GetOrderDetails } from "@/api/get-order-details"
    import { OrderStatus } from "@/components/order-status"
    import {ptBR} from 'date-fns/locale'
    import {formatDistanceToNow} from 'date-fns'
import { Item } from "@radix-ui/react-dropdown-menu"
import { OrderDetailsSkeleton } from "./order-details-skeleton"
    
  interface OrderDetaisBody{
    id:string
  }

export function OrderDetails({id}:OrderDetaisBody){

    const {data:OrderDetailsData,isLoading:isLoadingDetailsData} = useQuery({
        queryKey:['order-details'],
        queryFn:()=>GetOrderDetails({id:id})
    })


    function calcSubTotal(price:number,quantity:number){
        const result = price*quantity
        return result.toLocaleString('pt-BR',{style:"currency",currency:"BRL"})
    }

    const date = new Date(OrderDetailsData!=undefined?OrderDetailsData?.createdAt:"")
    return(
        <DialogContent>
            {!isLoadingDetailsData&&(
                <>
                        <DialogHeader>
                            <DialogTitle>Pedido: {OrderDetailsData?.id}</DialogTitle>
                            <DialogDescription>Detalhes do pedido</DialogDescription>
                        </DialogHeader>

                        <Table>
                            <TableBody>
                                <TableRow className="flex justify-between">
                                    <TableCell>Status</TableCell>
                                    <TableCell>
                                        {OrderStatus({status:OrderDetailsData?.status || "pending"})}
                                    </TableCell>
                                </TableRow>
                                <TableRow className="flex justify-between">
                                    <TableCell>Cliente</TableCell>
                                    <TableCell>{OrderDetailsData?.customer.name}</TableCell>
                                </TableRow>
                                <TableRow className="flex justify-between">
                                    <TableCell>Telefone</TableCell>
                                    <TableCell>{OrderDetailsData?.customer.phone}</TableCell>
                                </TableRow>
                                <TableRow className="flex justify-between">
                                    <TableCell>E-mail</TableCell>
                                    <TableCell>{OrderDetailsData?.customer.email}</TableCell>
                                </TableRow>
                                <TableRow className="flex justify-between">
                                    <TableCell>Realizado há</TableCell>
                                    <TableCell>{OrderDetailsData?.createdAt?formatDistanceToNow(date,{locale:ptBR,addSuffix:true}):"Data não disponível"}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Produto</TableHead>
                                    <TableHead>Qtd.</TableHead>
                                    <TableHead>Preço</TableHead>
                                    <TableHead>Subtotal</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {OrderDetailsData?.orderItems.map((item)=>{
                                    return(
                                        <TableRow key={item.id}>
                                            <TableCell>{item.product.name}</TableCell>
                                            <TableCell>{item.quantity}</TableCell>
                                            <TableCell>{item.priceInCents.toLocaleString('pt-BR',{style:"currency",currency:"BRL"})}</TableCell>
                                            <TableCell>{calcSubTotal(item.priceInCents,item.quantity)}</TableCell>
                                        </TableRow>
                                    )
                                })}
                                <TableRow>
                                    <TableCell colSpan={3}>Total do pedido</TableCell>
                                    <TableCell>{OrderDetailsData?.totalInCents.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>             
                </>
            )}
            {isLoadingDetailsData&&(
                <OrderDetailsSkeleton/>
            )}
        </DialogContent>
    )
}
                        
                        
                          
                            