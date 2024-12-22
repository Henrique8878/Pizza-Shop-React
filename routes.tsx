import React from 'react';
import {createBrowserRouter} from 'react-router-dom'
import {Dashboard} from './src/pages/app/dashboard/dashboard'
import {SignIn} from '../Pizza-Shop/src/pages/auth/sign-in'
import { Signup } from '@/pages/auth/sign-up';
import { AppLayout } from '@/pages/_layouts/app';
import { AuthLayout } from '@/pages/_layouts/auth';
import { Orders } from '@/pages/app/orders/orders';
import { NotFound } from '@/pages/404-not-found';
export const router = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<NotFound/>,
        children:[
            {
                path:"/",
                element:<Dashboard/>
            }
            ,{
                path:"/orders",
                element:<Orders/>
            }
        ]
    },
    {
        path:"/",
        element:<AuthLayout/>,
        children:[
            {
                path:"/sign-in",
                element:<SignIn/>
            },
            {
                path:"/sign-up",
                element:<Signup/>
            }
        ]
    }
])