import {ResponsiveContainer,YAxis,XAxis,Tooltip,Line,LineChart, CartesianGrid,} from 'recharts'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  import colors from 'tailwindcss/colors'
  import { GetDailyReceiptInPeriod } from '@/api/get-daily-receipt-in-period'
  import { useQuery } from '@tanstack/react-query'
import { DateRangePicker } from '@/components/date-range-picker'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import {subDays} from 'date-fns'
import { Loader2 } from 'lucide-react'



export function RevenueCharts(){
    const [rangeData,setRangeData] = useState<DateRange|undefined>({
        from:subDays(new Date(),7),
        to:new Date()
    })

    const {data:GetDailyReceiptInPeriodData} = useQuery({
        queryKey:['metrics','GetDailyReceiptInPeriod',rangeData],
        queryFn:()=>GetDailyReceiptInPeriod({
            from:rangeData?.from,
            to:rangeData?.to
        })
    })

    function ConvertReceiptReal(value:number){
        const real = value/100
        return real.toLocaleString('pt-BR',{style:"currency",currency:"BRL"})
    }
    return(
        <Card className='col-span-6 pb-4 pr-4'>
           {GetDailyReceiptInPeriodData?(
                <>
                     <CardHeader className='relative flex justify-between'>
                            <div className='flex flex-col'>
                            <CardTitle>Receita no período</CardTitle>
                            <CardDescription>Receita diária no periódo</CardDescription>
                            </div>
                            <DateRangePicker date={rangeData} OnChangeDate={setRangeData} className='absolute right-4'/>
                    </CardHeader>
                    <CardContent>
                        {GetDailyReceiptInPeriodData&&(
                            <ResponsiveContainer width="100%" height={240}>
                                <LineChart data={GetDailyReceiptInPeriodData} style={{fontSize:12}}>
                                    <YAxis tickLine={false} axisLine={false} tickFormatter={(value:number)=>ConvertReceiptReal(value)} width={95}/>
                                    <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
                                    <Line type="linear" strokeWidth={2} dataKey="receipt" stroke={colors.violet['400']}/>
                                    <CartesianGrid vertical={false} className='stroke-muted'/>
                                </LineChart>
                            </ResponsiveContainer>
               )}
                    </CardContent>
                
                        </>
                ):(
                    <div className=' flex w-full h-[240px] items-center justify-center'>
                        <Loader2 className='w-8 h-8 text-muted-foreground animate-spin'/>
                    </div>
                )}
        </Card>
    )
}