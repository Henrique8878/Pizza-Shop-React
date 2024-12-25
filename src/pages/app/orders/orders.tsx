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
import { useQuery } from "@tanstack/react-query"
import { GetOrders } from "@/api/get-orders"
import { useSearchParams } from "react-router-dom"
import {z} from 'zod'

export function Orders(){

        const [searchParams,setSearchParams] = useSearchParams()

        const orderId = searchParams.get('orderId')
        const customerName = searchParams.get('customerName')
        const status = searchParams.get('status')

        const pageIndex = z.coerce.number().transform((page)=>page-1).parse(searchParams.get('page')??"1")

        const {data:resultData} = useQuery({
            queryKey:['orders',pageIndex,orderId,customerName,status],
            queryFn:()=>GetOrders({pageIndex:pageIndex,customerName:customerName,orderId:orderId,status:status==="all"?null:status})
        })

        function ChangePage(pageIndex:number){
            setSearchParams((prev)=>{
                prev.set('page',(pageIndex+1).toString())
                return prev
            })
        }

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
                        {resultData && resultData.orders.map((orders)=>{
                            return(
                                <OrderTableRow key={orders.orderId} orders={orders}/>
                            )
                        })}
                    </TableBody>
                </Table>
                {resultData&&(
                    <Pagination pageIndex={resultData.meta.pageIndex} perPage={resultData.meta.perPage} totalCount={resultData.meta.totalCount} OnPageChange={ChangePage}/>
                )}
            </div>
        </>
    )
} 
                            
