import {expect,test,describe,it} from 'vitest'
import {render} from '@testing-library/react'
import { OrderStatus } from './order-status'

describe('Order Status',()=>{
    it('should display the right text when order status in pending',()=>{
        const wrapper = render(<OrderStatus status='pending'/>)

        const textSpan = wrapper.getByText("Pendente")

        const colorCircleSpan = wrapper.getByTestId("badge")
        expect(colorCircleSpan).toHaveClass("bg-slate-400")
        expect(textSpan).toBeInTheDocument()
    })

    it('should display the right text when order status in processing',()=>{
        const wrapper = render(<OrderStatus status='processing'/>)

        const textSpan = wrapper.getByText("Em preparo")

        const colorCircleSpan = wrapper.getByTestId("badge")
        expect(colorCircleSpan).toHaveClass("bg-yellow-400")
        expect(textSpan).toBeInTheDocument()
    })

    it('should display the right text when order status in delivering',()=>{
        const wrapper = render(<OrderStatus status='delivering'/>)

        const textSpan = wrapper.getByText("Em entrega")

        const colorCircleSpan = wrapper.getByTestId("badge")
        expect(colorCircleSpan).toHaveClass("bg-yellow-400")
        expect(textSpan).toBeInTheDocument()
    })

    it('should display the right text when order status in delivered',()=>{
        const wrapper = render(<OrderStatus status='delivered'/>)

        const textSpan = wrapper.getByText("Entregue")

        const colorCircleSpan = wrapper.getByTestId("badge")
        expect(colorCircleSpan).toHaveClass("bg-emerald-500")
        expect(textSpan).toBeInTheDocument()
    })

    it('should display the right text when order status in canceled',()=>{
        const wrapper = render(<OrderStatus status='canceled'/>)

        const textSpan = wrapper.getByText("Cancelado")

        const colorCircleSpan = wrapper.getByTestId("badge")
        expect(colorCircleSpan).toHaveClass("bg-red-500")
        expect(textSpan).toBeInTheDocument()
    })
})