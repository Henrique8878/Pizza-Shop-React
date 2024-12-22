import {Pizza,Home,UtensilsCrossed} from 'lucide-react'
import { Separator } from '../components/ui/separator'
import { NavLink } from './nav-link'
import { ThemeToggle } from './themes/theme-toggle'
import { AccountMenu } from './account-menu'
export function Header(){
    return(
        <>
            <nav className='relative flex items-center space-x-6 h-8 p-8 border border-b'>
                <Pizza/>
                 <Separator className='h-6' orientation='vertical'/>
                 <NavLink to="/">
                    <Home/>
                    <span>Início</span>
                </NavLink>   
                 <NavLink to="/orders">
                    <UtensilsCrossed/>
                    <span>Pedidos</span>
                 </NavLink>
                 <div className='flex items-center justify-between ml-auto absolute right-6 gap-4'>
                    <ThemeToggle/>
                    <AccountMenu/>
                 </div>
            </nav>
        </>
    )
}