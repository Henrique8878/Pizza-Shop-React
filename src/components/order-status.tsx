
export type TypeStatus = "pending" | "canceled" | "processing" | "delivering" | "delivered"

interface Status{
    status:TypeStatus
}


const orderStatusMap:Record<TypeStatus,string>={
    canceled:"Cancelado",
    delivered:"Entregue",
    delivering:"Em entrega",
    pending:"Pendente",
    processing:"Em preparo"
}

export function OrderStatus({status}:Status){
    return(
        <div className="flex items-center gap-2">
            {status==="pending"&&<span className="h-2 w-2 rounded-full bg-slate-400"></span>}
            {status==="canceled"&&<span className="h-2 w-2 rounded-full bg-red-500"></span>}
            {status==="processing"&&<span className="h-2 w-2 rounded-full bg-yellow-400"></span>}
            {status==="delivering"&&<span className="h-2 w-2 rounded-full bg-yellow-400"></span>}
            {status==="delivered"&&<span className="h-2 w-2 rounded-full bg-emerald-500"></span>}
            <span>{orderStatusMap[status]}</span>
        </div>
    )
}