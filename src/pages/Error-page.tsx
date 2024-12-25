import { useRouteError,Link } from "react-router-dom"


export function ErrorPage(){
    const error = useRouteError() as Error
    return(
        <div className="flex flex-col justify-center items-center gap-2 h-screen">
            <h1 className="text-4xl">Whoops, algo aconteceu...</h1>
            <span>Um erro aconteceu na aplicação, abaixo voce encontra mais detalhes</span>
            <pre>{error.message || JSON.stringify(error)}</pre>
            <span className="text-accent-foreground">Voltar para o <Link to="/" className="font-bold text-red-500">Dashboard</Link></span>
        </div>
    )
}