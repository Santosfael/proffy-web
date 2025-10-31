import { createBrowserRouter } from 'react-router'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { Forgot } from './pages/auth/forgot'
import { FinallyForgot } from './pages/auth/finally-forgot'
import { FinallyRegister } from './pages/auth/finally-register'

export const router = createBrowserRouter([
    { path: '/sign-in', element: <SignIn /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/forgot', element: <Forgot /> },
    { path: '/forgot/finally-forgot', element: <FinallyForgot /> },
    { path: '/sign-up/finally-register', element: <FinallyRegister /> }
])