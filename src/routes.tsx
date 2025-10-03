import { createBrowserRouter } from 'react-router'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
    { path: '/sign-in', element: <SignIn /> }
])