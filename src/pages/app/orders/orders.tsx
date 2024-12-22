import { Helmet } from "react-helmet-async"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { OrderTableRow } from "./order-table-row"
import { OrderTableFilter } from "./order-table-filter"
import { Pagination } from "@/components/pagination"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function Orders(){
    return(
        <>
            <Helmet title="Pedidos"/>
            <div className="flex flex-col space-y-4 m-9">
                <h1 className="text-4xl font-bold">Pedidos</h1>
                <OrderTableFilter/>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[4rem]"></TableHead>
                            <TableHead className="w-[11rem]">Identificador</TableHead>
                            <TableHead className="w-[10rem]">Realizado há</TableHead>
                            <TableHead className="w-[8rem]">Status</TableHead>
                            <TableHead>Cliente</TableHead>
                            <TableHead className="w-[10rem]">Total do pedido</TableHead>
                            <TableHead className="w-[8rem]"></TableHead>
                            <TableHead className="w-[8rem]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from({length:10}).map((_,i)=>{
                            return(
                                <OrderTableRow key={i}/>
                            )
                        })}
                    </TableBody>
                </Table>
                <Pagination pageIndex={0} perPage={10} totalCount={105}/>
            </div>
        </>
    )
} 
                            
