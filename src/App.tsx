import { useState } from 'react'
import { Button } from './components/ui/button'
import './index.css'
import {router} from '../routes'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider,Helmet } from 'react-helmet-async'
import { ThemeProvider } from './components/themes/theme-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/query-client'
import {Toaster} from 'sonner'

export function App() {
  return (
   <HelmetProvider>
    <ThemeProvider defaultTheme='dark' storageKey='pizza.shop-theme'>
      <Toaster richColors closeButton/>
       <Helmet titleTemplate='%s | pizza.shop'/>
       <QueryClientProvider client={queryClient}>
         <RouterProvider router={router}/>
       </QueryClientProvider>
    </ThemeProvider>
   </HelmetProvider>
  )
}



