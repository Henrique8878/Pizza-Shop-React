import { Skeleton } from "./ui/skeleton";

export function MetricGraphicLineSkeleton(){
    return(
        <div className="flex flex-col justify-between">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <Skeleton className="h-7 w-56"/>
                    <Skeleton className="h-4 w-48"/>
                </div>
                <Skeleton className="w-64 h-9"/>
            </div>
        <Skeleton className="w-full h-20"/>
        </div>
    )
}
