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
  
  

export function OrderDetails(){
    return(
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: h34ghg45324v43j</DialogTitle>
                <DialogDescription>Detalhes do pedido</DialogDescription>
            </DialogHeader>

           <Table>
                <TableBody>
                    <TableRow className="flex justify-between">
                        <TableCell>Status</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                                <span>Pendente</span>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow className="flex justify-between">
                        <TableCell>Cliente</TableCell>
                        <TableCell>Henrique de Araújo Tomaz</TableCell>
                    </TableRow>
                    <TableRow className="flex justify-between">
                        <TableCell>Telefone</TableCell>
                        <TableCell>(35) 99904-7684</TableCell>
                    </TableRow>
                    <TableRow className="flex justify-between">
                        <TableCell>E-mail</TableCell>
                        <TableCell>henrique.tomaz@fagammon.edu.br</TableCell>
                    </TableRow>
                    <TableRow className="flex justify-between">
                        <TableCell>Realizado há</TableCell>
                        <TableCell>há 3 minutos</TableCell>
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
                        <TableCell>Pizza Pepperoni Familia</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>R$ 69,90</TableCell>
                        <TableCell>R$ 119,90</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Pizza Pepperoni Familia</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>R$ 69,90</TableCell>
                        <TableCell>R$ 119,90</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={3}>Total do pedido</TableCell>
                        <TableCell>R$ 238,80</TableCell>
                    </TableRow>
                </TableBody>
            </Table>             
        </DialogContent>
    )
}
                        
                        