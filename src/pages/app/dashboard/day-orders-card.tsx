import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { DollarSign } from "lucide-react"
import { GetDayOrdersAmount } from "@/api/get-day-orders-amount"
import { useQuery } from "@tanstack/react-query"
import { MetricCardSkeleton } from "@/components/metric-card-skeleton"
export function DayOrdersCard(){
   const {data:DayOrdersCardData} =  useQuery({
        queryKey:['DayOrdersCard'],
        queryFn:GetDayOrdersAmount
    })

    console.log(DayOrdersCardData)
    return(
        <Card className="py-6 px-6 space-y-3">
            <CardHeader className="flex flex-row items-center space-y-0 justify-between p-0">
                <CardTitle className="text-xl">Pedidos(dia)</CardTitle>
                <DollarSign className="w-5 h-5 text-muted-foreground"/>
            </CardHeader>
           {DayOrdersCardData?.amount!=undefined?(
                 <CardContent className="flex flex-col gap-1">
                 <span className="text-2xl font-semibold">12</span>
                 <CardDescription>
                     {DayOrdersCardData&&DayOrdersCardData.amount>=0?(
                         <span className="text-muted-foreground"><span className="text-emerald-500 dark:text-emerald-400">+{DayOrdersCardData.amount.toFixed(0)}%</span> em relação ao mês passado</span>
                     ):(
                         <span className="text-muted-foreground"><span className="text-red-500 dark:text-red-400">-{DayOrdersCardData&&DayOrdersCardData.amount.toFixed(0)}%</span> em relação ao mês passado</span>
                     )}
                     
                 </CardDescription>
             </CardContent>
           ):(
            <MetricCardSkeleton/>
           )}
        </Card>
    )
}