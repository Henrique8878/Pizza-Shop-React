import {ResponsiveContainer,Pie,PieChart,Cell} from 'recharts'
import colors from 'tailwindcss/colors'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  const data = [
    {
        product:"Pepperonni",
        amount:20
    },
    {
        product:"Frango E Catupiry",
    amount:56
    },
    {
        product:"Mussarela",
    amount:32
    },
    {
        product:"Marguerita",
        amount:80
    },
    {
        product:"Palmito",
        amount:15
    },
    {
        product:"Calabresa",
    amount:60
    },
    {
        product:"Ao molho",
        amount:30
    },
  ]

  const arrayColors = [
    colors.blue[500],
    colors.emerald[500],
    colors.pink[500],
    colors.red[500],
    colors.violet[500],
    colors.zinc[500],
    colors.yellow[500]
  ]


export function PopularProductsCharts(){
    return(
        <Card className='col-span-3 pb-4 pr-4'>
            <CardHeader className='flex flex-col'>
                <CardTitle>Receita no período</CardTitle>
                <CardDescription>Receita diária no periódo</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <PieChart data={data} style={{fontSize:12}}>
                        <Pie data={data} dataKey="amount" nameKey="product" outerRadius={86} innerRadius={64} strokeWidth={8} cx="50%" cy="50%" label={({
                            cx,cy,midAngle,innerRadius,outerRadius,value,index,
                        })=>{
                            const RADIAN = Math.PI/100
                            const radius = 12+innerRadius+(outerRadius-innerRadius)
                            const x = cx + radius* Math.cos(-midAngle*RADIAN)
                            const y = cy + radius* Math.sin(-midAngle*RADIAN)

                            return(
                                <text x={x} y={y} className='fill-muted-foreground text-xs' textAnchor={x>cx?'start':'end'} dominantBaseline="central">
                                    {data[index].product.substring(0,12).concat('...')} ({value})
                                </text>
                            )
                        }} labelLine={false}>
                            {data.map((_,i)=>{
                                return(
                                    <Cell key={`cell-${i}`} fill={arrayColors[i]} className='stroke-background hover:opacity-80'/>
                                )  
                            })}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}