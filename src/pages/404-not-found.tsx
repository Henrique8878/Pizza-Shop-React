import { Link } from "react-router-dom"
export function NotFound(){
    return(
        <div className="h-screen flex flex-col justify-center items-center gap-2">
            <h1 className="font-bold text-4xl">Página não encontrada</h1>
            <span className="text-accent-foreground">Voltar para o <Link to="/" className="font-bold text-red-500">Dashboard</Link></span>
        </div>
    )
}