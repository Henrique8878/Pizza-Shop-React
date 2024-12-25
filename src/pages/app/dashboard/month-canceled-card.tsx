import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { DollarSign } from "lucide-react"
  import { CancelOrder } from "@/api/cancel-order"
import { useQuery } from "@tanstack/react-query"
import { GetMonthCanceledOrdersAmount } from "@/api/get-month-canceled-order-amount"

export function MonthCanceledCard(){
        const {data:GetMonthCanceledOrdersAmountData} = useQuery({
            queryKey:['MonthCanceled'],
            queryFn:GetMonthCanceledOrdersAmount
        })
    return(
        <Card className="py-6 px-6 space-y-3">
            <CardHeader className="flex flex-row items-center space-y-0 justify-between p-0">
                <CardTitle className="text-xl">Cancelamentos(mês)</CardTitle>
                <DollarSign className="w-5 h-5 text-muted-foreground"/>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
                <span className="text-2xl font-semibold">{GetMonthCanceledOrdersAmountData?.amount}</span>
                <CardDescription>
                    {GetMonthCanceledOrdersAmountData&&GetMonthCanceledOrdersAmountData.diffFromLastMonth>=0?(
                        <span className="text-muted-foreground"><span className="text-red-500 dark:text-red-400">+{GetMonthCanceledOrdersAmountData.diffFromLastMonth.toFixed(0)}%</span> em relação ao mês passado</span>
                    ):
                    (
                        <span className="text-muted-foreground"><span className="text-emerald-500 dark:text-emerald-400">-{GetMonthCanceledOrdersAmountData?.diffFromLastMonth.toFixed(0)}%</span> em relação ao mês passado</span>
                    )}
                    
                </CardDescription>
            </CardContent>
        </Card>
    )
}