import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { DollarSign } from "lucide-react"
  import { GetMonthOrdersAmount } from "@/api/get-month-orders-amount"
import { useQuery } from "@tanstack/react-query"
import { MetricCardSkeleton } from "@/components/metric-card-skeleton"

export function MonthOrdersCard(){

    const {data:GetMonthOrdersAmountFn} = useQuery({
        queryKey:['GetOrdersAmount'],
        queryFn:GetMonthOrdersAmount
    })
    return(
        <Card className="py-6 px-6 space-y-3">
            <CardHeader className="flex flex-row items-center space-y-0 justify-between p-0">
                <CardTitle className="text-xl">Pedidos(mês)</CardTitle>
                <DollarSign className="w-5 h-5 text-muted-foreground"/>
            </CardHeader>
            {GetMonthOrdersAmountFn?.amount?(
                <CardContent className="flex flex-col gap-1">
                <span className="text-2xl font-semibold">{GetMonthOrdersAmountFn?.amount}</span>
                <CardDescription>
                    {GetMonthOrdersAmountFn&&GetMonthOrdersAmountFn.diffFromLastMonth>0?(
                        <span className="text-muted-foreground"><span className="text-emerald-500 dark:text-emerald-400">+{GetMonthOrdersAmountFn.diffFromLastMonth.toFixed(0)}%</span> em relação ao mês passado</span>
                    ):
                    (
                        <span className="text-muted-foreground"><span className="text-red-500 dark:text-red-400">-{GetMonthOrdersAmountFn?.diffFromLastMonth.toFixed(0)}%</span> em relação ao mês passado</span>
                    )}
                    
                </CardDescription>
            </CardContent>
            ):(
                <MetricCardSkeleton/>
            )}
        </Card>
    )
}

    