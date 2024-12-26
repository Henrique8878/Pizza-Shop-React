import { expect,describe,it } from "vitest";
import {getByRole, getRoles, render} from '@testing-library/react'
import { Pagination } from "./pagination";
import userEvent, {UserEvent} from '@testing-library/user-event'

const onChangePageCallBack = vi.fn()
describe('Pagination',()=>{
    beforeEach(()=>{
        onChangePageCallBack.mockClear
    })
    it('should display the right amount of pages and results',async ()=>{
        const user = userEvent.setup()
        const wrapper = render(
            <Pagination 
            pageIndex={0} 
            perPage={10} 
            totalCount={200} 
            OnPageChange={onChangePageCallBack}
            />
        )

        const totalCount = wrapper.getByText("Total de 200 item(s)")
        const pageIndex = wrapper.getByText("Página 1 de 20")
        const buttonNextPage = wrapper.getByRole('button',{
            name:"Próxima página"
        })
        const buttonLastPage = wrapper.getByRole('button',{
            name:"Última página"
        })
        
        
        await user.click(buttonLastPage)

        expect(totalCount).toBeInTheDocument()
        expect(pageIndex).toBeInTheDocument()
        expect(onChangePageCallBack).toBeCalledWith(19)
    })

    it('should display the right amount of pages and results',async ()=>{
        const user = userEvent.setup()
        const wrapper = render(
            <Pagination 
            pageIndex={1} 
            perPage={10} 
            totalCount={200} 
            OnPageChange={onChangePageCallBack}
            />
        )

        const totalCount = wrapper.getByText("Total de 200 item(s)")
        const pageIndex = wrapper.getByText("Página 2 de 20")
        const previousPage = wrapper.getByRole('button',{
            name:"Página anterior"
        })

        await user.click(previousPage)
        expect(totalCount).toBeInTheDocument()
        expect(pageIndex).toBeInTheDocument()
        expect(onChangePageCallBack).toBeCalledWith(0)
    })
    })
        
        

        