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
  import { OrderStatus } from "@/components/order-status"
  import {formatDistanceToNow} from 'date-fns'
  import {ptBR} from 'date-fns/locale'
  import { GetOrders } from "@/api/get-orders"
import { useQuery } from "@tanstack/react-query"


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


    return(
        <TableRow>
        <TableCell>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">
                        <Search/>
                    </Button>
                </DialogTrigger>
                <OrderDetails/>
            </Dialog>
        </TableCell>
        <TableCell>{orders.orderId}</TableCell>
        <TableCell className="text-muted-foreground">{formatDistanceToNow(orders.createdAt,{locale:ptBR,addSuffix:true})}</TableCell>
        <TableCell>
           {OrderStatus({status:orders.status})}
        </TableCell>
        <TableCell>{orders.customerName}</TableCell>
        <TableCell>{orders.total.toLocaleString('pt-BR',{
            style:"currency",
            currency:"BRL"
        })}</TableCell>
        <TableCell>
            <Button variant="outline">
                <ArrowRight/>
                <span>Aprovar</span>
            </Button>
        </TableCell>
        <TableCell>
            <Button variant="ghost">
                <X/>
                <span>Cancelar</span>    
            </Button>
        </TableCell>
    </TableRow>
    )
}