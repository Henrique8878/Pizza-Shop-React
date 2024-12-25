import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"
  import { DollarSign } from "lucide-react"
import { GetMonthReceipt } from "@/api/get-month-receipt"

export function MonthRevenueCard(){

    const {data:GetMonthReceiptFn} = useQuery({
        queryKey:['GetMonthReceipt'],
        queryFn:GetMonthReceipt

    })

    function ConvertReceiptReal(value:number){
        const real = value/100
        return real.toLocaleString('pt-BR',{style:"currency",currency:"BRL"})
    }
    return(
        <Card className="py-6 px-6 space-y-3">
            <CardHeader className="flex flex-row items-center space-y-0 justify-between p-0">
                <CardTitle className="text-xl">Receita total(mês)</CardTitle>
                <DollarSign className="w-5 h-5 text-muted-foreground"/>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
                <span className="text-2xl font-semibold">{ConvertReceiptReal(GetMonthReceiptFn?GetMonthReceiptFn?.receipt:0)}</span>
                <CardDescription>
                    {GetMonthReceiptFn&&GetMonthReceiptFn?.diffFromLastMonth>=0?
                    (
                        <span className="text-muted-foreground"><span className="text-emerald-500 dark:text-emerald-400">+{GetMonthReceiptFn?.diffFromLastMonth.toFixed(0)}%</span> em relação ao mês passado</span>
                    ):
                    (
                        <span className="text-muted-foreground"><span className="text-red-500 dark:text-red-400">{GetMonthReceiptFn?.diffFromLastMonth}</span> em relação ao mês passado</span>
                    )}
                    
                </CardDescription>
            </CardContent>
        </Card>
    )
}