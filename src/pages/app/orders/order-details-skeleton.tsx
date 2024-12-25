import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

export function OrderDetailsSkeleton(){
    return(
        <>
            <div className="flex flex-col">
                <span>Pedido: <Skeleton className="w-24 h-6"/></span>
                <span>Detalhes do pedido</span>
            </div>

           <Table>
                <TableBody>
                    <TableRow className="flex justify-between">
                        <TableCell>Status</TableCell>
                        <TableCell>
                            <Skeleton className="w-20 h-6"/>
                        </TableCell>
                    </TableRow>
                    <TableRow className="flex justify-between">
                        <TableCell>Cliente</TableCell>
                        <TableCell><Skeleton className="w-20 h-6"/></TableCell>
                    </TableRow>
                    <TableRow className="flex justify-between">
                        <TableCell>Telefone</TableCell>
                        <TableCell><Skeleton className="w-20 h-6"/></TableCell>
                    </TableRow>
                    <TableRow className="flex justify-between">
                        <TableCell>E-mail</TableCell>
                        <TableCell><Skeleton className="w-20 h-6"/></TableCell>
                    </TableRow>
                    <TableRow className="flex justify-between">
                        <TableCell>Realizado há</TableCell>
                        <TableCell><Skeleton className="w-20 h-6"/></TableCell>
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
                   
                            <TableRow>
                                <TableCell><Skeleton className="w-20 h-6"/></TableCell>
                                <TableCell><Skeleton className="w-20 h-6"/></TableCell>
                                <TableCell><Skeleton className="w-20 h-6"/></TableCell>
                                <TableCell><Skeleton className="w-20 h-6"/></TableCell>
                            </TableRow>
                     
                    <TableRow>
                        <TableCell colSpan={3}>Total do pedido</TableCell>
                        <TableCell><Skeleton className="w-20 h-6"/></TableCell>
                    </TableRow>
                </TableBody>
            </Table>             
        </>
    )
}