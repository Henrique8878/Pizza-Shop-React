import { Button } from "@/components/ui/button"
import { Helmet } from "react-helmet-async"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { MonthRevenueCard } from "./month-revenue-card"
import { MonthCanceledCard } from "./month-canceled-card"
import { MonthOrdersCard } from "./month-orders-card"
import { DayOrdersCard } from "./day-orders-card"
import { RevenueCharts } from "./revenue-charts"
import { PopularProductsCharts } from "./popular-products-charts"
  
export function Dashboard(){
    return(
        <>
            <Helmet title="Dashboard"/>
            <div className="flex flex-col space-y-4 m-9">
                <h1 className="text-4xl font-bold">Dashboard</h1>
                <div className="flex gap-4 grid grid-cols-4">
                    <MonthRevenueCard/>
                    <MonthOrdersCard/>
                    <DayOrdersCard/>
                    <MonthCanceledCard/>
                </div>
                <div className="grid grid-cols-9">
                    <RevenueCharts/>
                    <PopularProductsCharts/>
                </div>
            </div>
        </>
    )
}
                        