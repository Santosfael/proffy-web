import { createBrowserRouter } from 'react-router'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

export const router = createBrowserRouter([
    { path: '/sign-in', element: <SignIn /> },
    { path: '/sign-up', element: <SignUp /> }
])