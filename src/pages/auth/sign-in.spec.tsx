import {describe,expect,it} from 'vitest'
import {render} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SignIn } from './sign-in'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/query-client'
describe('Sign-in',()=>{
    it('should highlight the nav link when is the current page link',()=>{
        const wrapper = render(<SignIn/>,{
            wrapper:({children})=>{
                return(
                    <MemoryRouter initialEntries={['/sign-in?email=henriquetomazparticular@gmail.com']}>
                        <HelmetProvider>
                            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
                        </HelmetProvider>
                    </MemoryRouter>
                )
            }
        })

        const inputEmail = wrapper.getByLabelText("Seu e-mail") as HTMLInputElement
        console.log(inputEmail.outerHTML)
        expect(inputEmail.value).toEqual("henriquetomazparticular@gmail.com")
        
    })
})