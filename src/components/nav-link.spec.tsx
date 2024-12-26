import {describe,expect,it} from 'vitest'
import {render} from '@testing-library/react'
import { NavLink } from './nav-link'
import { MemoryRouter } from 'react-router-dom'

describe('Nav-Link',()=>{
    it('should highlight the nav link when is the current page link',()=>{
        const wrapper = render(
        <>
            <NavLink to="/">dashboard</NavLink>
            <NavLink to="/orders">Pedidos</NavLink>
        </>,{
            wrapper:({children})=>{
                return(
                    <MemoryRouter initialEntries={['/']}>
                        {children}
                    </MemoryRouter>
                )
            }
        })

        expect(wrapper.getByText('dashboard').dataset.current).toEqual('true')
        expect(wrapper.getByText('Pedidos').dataset.current).toEqual('false')
        
    })
})