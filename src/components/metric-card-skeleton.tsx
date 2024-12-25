import { Skeleton } from "./ui/skeleton"

 export function MetricCardSkeleton(){
    return(
        <>
            <Skeleton className="h-7 w-36"/>
            <Skeleton className="h-3 w-48"/>
        </>
    )
 }