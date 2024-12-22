import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { DollarSign } from "lucide-react"

export function MonthRevenueCard(){
    return(
        <Card className="py-6 px-6 space-y-3">
            <CardHeader className="flex flex-row items-center space-y-0 justify-between p-0">
                <CardTitle className="text-xl">Receita total(mês)</CardTitle>
                <DollarSign className="w-5 h-5 text-muted-foreground"/>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
                <span className="text-2xl font-semibold"> R$ 1248,60</span>
                <CardDescription>
                    <span className="text-muted-foreground"><span className="text-emerald-500 dark:text-emerald-400">+2%</span> em relação ao mês passado</span>
                </CardDescription>
            </CardContent>
        </Card>
    )
}