export interface PaginationProps{
    pageIndex:number,
    totalCount:number,
    perPage:number
}
import { ChevronsLeft,ChevronsRight,ChevronLeft,ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

export function Pagination({pageIndex,totalCount,perPage}:PaginationProps){
    const pages = Math.ceil(totalCount/perPage) || 1
  return (
    <footer className="flex justify-between px-4">
      <div>
        <span>Total de {totalCount} item(s)</span>
      </div>
      <div className="flex gap-4">
        <span>Página {pageIndex + 1} de {pages} </span>
        <section className="flex space-x-2">
            <Button variant="outline" className="w-7 h-7">
                <ChevronsLeft/>
                <span className="sr-only">Primeira página</span>
            </Button>
            <Button variant="outline" className="w-7 h-7">
                <ChevronLeft/>
                <span className="sr-only">Página anterior</span>
            </Button>
            <Button variant="outline" className="w-7 h-7">
                <ChevronRight/>
                <span className="sr-only">Próxima página</span>
            </Button>
            <Button variant="outline" className="w-7 h-7">
                <ChevronsRight/>
                <span className="sr-only">Primeira página</span>
            </Button>
        </section>
      </div>
    </footer>
  )
}


