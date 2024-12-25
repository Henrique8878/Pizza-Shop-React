import {
    TableCell,
    TableRow,
  } from "@/components/ui/table"
  import {Search, ArrowRight, X} from 'lucide-react'
  import { Button } from "@/components/ui/button"
  
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog" 
    
    import { OrderDetails } from "./order-details"
    import { OrderStatus, TypeStatus } from "@/components/order-status"
    import {formatDistanceToNow} from 'date-fns'
    import {id, ptBR} from 'date-fns/locale'
    import { GetOrders, GetOrdersBody } from "@/api/get-orders"
    import { useQuery, useQueryClient } from "@tanstack/react-query"
    import { useMutation } from "@tanstack/react-query"
    import { CancelOrder } from "@/api/cancel-order"
    import { ApproveOrder } from "@/api/approve-order"
    import { DeliverOrder } from "@/api/deliver-order"
    import { DispatchOrder } from "@/api/dispatch-orders"
   
    import { toast } from "sonner"

  interface OrderTableRowProps{
    orders: {
        orderId: string;
        createdAt: string;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        customerName: string;
        total: number;
    }
  }
   

    
export function OrderTableRow({orders}:OrderTableRowProps){
    const queryClient = useQueryClient()
     function UpdateStatusOrder(id:string,status:TypeStatus){
        
        const cached = queryClient.getQueriesData<GetOrdersBody>({
            queryKey:['orders']
        })

        cached.forEach(([queryKey,cachedData])=>{
            if(!cachedData){
                return
            }

            queryClient.setQueryData<GetOrdersBody>(queryKey,{
                ...cachedData,
                orders: cachedData.orders.map((order)=>{
                    if(order.orderId===id){
                        return{
                            ...order,
                            status
                        }
                    }
                    return order
                    
                })
            })
        })
    }


    
    const {mutateAsync:CancelOrderFn, isPending:isCancelOrder} = useMutation({
        mutationFn:CancelOrder,
        async onSuccess(_, {id}, __) {
           UpdateStatusOrder(id,"canceled")
            toast.success("Pedido cancelado com sucesso !")
        },
    })

    const {mutateAsync:ApproveOrderFn, isPending:isApproveOrder} = useMutation({
        mutationFn:ApproveOrder,
       async onSuccess(data, {id}, context) {
            UpdateStatusOrder(id,"processing")
            toast.success("Iniciando preparo do pedido")
        },
    })
    
    const {mutateAsync:DispatchOrderFn, isPending:isDispatchOrder} = useMutation({
        mutationFn:DispatchOrder,
        onSuccess(data, {id}, context) {
            UpdateStatusOrder(id,"delivering")
            toast.success("Pedido entregue !")
        },
    })
    const {mutateAsync:DeliverOrderFn, isPending:isDeliverOrder} = useMutation({
        mutationFn:DeliverOrder,
       async onSuccess(data, {orderId}, context) {
            UpdateStatusOrder(orderId,"delivered")
            toast.success("Pedido em rota de entrega")
        },
    })


    const date = new Date(orders.createdAt)
    return(
        <TableRow>
        <TableCell>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">
                        <Search/>
                    </Button>
                </DialogTrigger>
                <OrderDetails id={orders.orderId}/>
            </Dialog>
        </TableCell>
        <TableCell>{orders.orderId}</TableCell>
        <TableCell className="text-muted-foreground">{formatDistanceToNow(date,{locale:ptBR,addSuffix:true})}</TableCell>
        <TableCell>
           {OrderStatus({status:orders.status})}
        </TableCell>
        <TableCell>{orders.customerName}</TableCell>
        <TableCell>{orders.total.toLocaleString('pt-BR',{
            style:"currency",
            currency:"BRL"
        })}</TableCell>
        <TableCell>
            {orders.status==="pending" && (
                
            <Button variant="outline" type="button" onClick={()=>ApproveOrderFn({id:orders.orderId})} disabled={isApproveOrder}>
                <ArrowRight/>
                <span>Aprovar</span>
            </Button>
            )}
            {orders.status==="delivering" && (
            
            <Button variant="outline" type="button" onClick={()=>DeliverOrderFn({orderId:orders.orderId})} disabled={isDeliverOrder}>
                <ArrowRight/>
                <span>Em entrega</span>
            </Button>
            )}

            {orders.status==="processing" && (
            
            <Button variant="outline" type="button" onClick={()=>DispatchOrderFn({id:orders.orderId})} disabled={isDeliverOrder}>
                <ArrowRight/>
                <span>Entregue</span>
            </Button>
            )}

            
        </TableCell>
        <TableCell>
            <Button variant="ghost" onClick={()=>CancelOrderFn({id:orders.orderId})} disabled={!['pending','processing'].includes(orders.status)}>
                <X/>
                <span>Cancelar</span>    
            </Button>
        </TableCell>
    </TableRow>
    )
}




