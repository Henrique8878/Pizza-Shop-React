import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight,X,Search } from "lucide-react";
import {
    TableCell,
    TableRow,
  } from "@/components/ui/table"
  import { Button } from "@/components/ui/button";
export function OrderRowSkeleton(){
    return Array.from({length:10}).map((_,i)=>{
         return(
        <TableRow>
            <TableCell>
                <Button variant="outline">
                    <Search/>
                </Button>
            </TableCell>
            <TableCell><Skeleton className="h-3 w-32"/></TableCell>
            <TableCell className="text-muted-foreground"><Skeleton className="h-3 w-32"/></TableCell>
            <TableCell>
            <Skeleton className="h-3 w-10"/>
            </TableCell>
            <TableCell><Skeleton className="h-3 w-32"/></TableCell>
            <TableCell><Skeleton className="h-3 w-32"/></TableCell>
            <TableCell>
                <Button variant="outline" type="button" disabled>
                    <ArrowRight/>
                    <span>Aprovar</span>
                </Button>
            </TableCell>
            <TableCell>
                <Button variant="ghost"disabled>
                    <X/>
                    <span>Cancelar</span>
                </Button>
            </TableCell>
        </TableRow>
    )
    })
   
}
                
              
            
                
            
            
            
            