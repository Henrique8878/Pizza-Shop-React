import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"  
import { X } from "lucide-react"

export function OrderTableFilter(){
    return(
        <form className="flex">
            <div className="flex items-center gap-3">
                <span>Filtros: </span>
                <Input type="text" name="" id="" placeholder="ID do pedido" className="h-8 w-auto"/>
                <Input type="text" name="" id="" placeholder="Nome do cliente" className="h-8 w-[20rem]"/>
                <Select defaultValue="all">
                    <SelectTrigger className="w-[11rem]">
                        <SelectValue/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos os status</SelectItem>
                        <SelectItem value="pending">Pendente</SelectItem>
                        <SelectItem value="canceled">Cancelado</SelectItem>
                        <SelectItem value="processing">Em preparo</SelectItem>
                        <SelectItem value="delivering">Em entrega</SelectItem>
                        <SelectItem value="delivered">Entregue</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="secondary">
                    <Search/>
                    <span>Filtrar resultados</span>
                </Button>
                <Button variant="outline">
                    <X/>
                    <span>Remover filtros</span>
                </Button>
            </div>
        </form>
    )
}

