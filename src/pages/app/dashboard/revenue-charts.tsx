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
  

  const data = [
    {
        date:"10/12",
        revenue:1200
    },
    {
        date:"11/12",
        revenue:900
    },
    {
        date:"12/12",
        revenue:300
    },
    {
        date:"13/12",
        revenue:2000
    },
    {
        date:"14/12",
        revenue:1350
    },
    {
        date:"15/12",
        revenue:700
    },
    {
        date:"16/12",
        revenue:1450
    },
  ]

export function RevenueCharts(){
    return(
        <Card className='col-span-6 pb-4 pr-4'>
            <CardHeader className='flex flex-col'>
                <CardTitle>Receita no período</CardTitle>
                <CardDescription>Receita diária no periódo</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} style={{fontSize:12}}>
                        <YAxis tickLine={false} axisLine={false} tickFormatter={(value:number)=>value.toLocaleString('pt-BR',{style:'currency',currency:"BRL"})} width={95}/>
                        <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
                        <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={colors.violet['400']}/>
                        <CartesianGrid vertical={false} className='stroke-muted'/>
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}