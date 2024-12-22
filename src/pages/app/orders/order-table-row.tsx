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

export function OrderTableRow(){
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
        <TableCell>45234rt345fdgfdgdf</TableCell>
        <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
        <TableCell>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-400"/>
                <span className="text-muted-foreground">Pendente</span>
            </div>
        </TableCell>
        <TableCell>Henrique de Araújo Tomaz</TableCell>
        <TableCell>R$ 149,00</TableCell>
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