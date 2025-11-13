import { createBrowserRouter } from 'react-router'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { Forgot } from './pages/auth/forgot'
import { FinallyForgot } from './pages/auth/finally-forgot'
import { FinallyRegister } from './pages/auth/finally-register'
import { Home } from './pages/app/home'
import { TeacherList } from './pages/app/teacher-list'

export const router = createBrowserRouter([
    { path: '/sign-in', element: <SignIn /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/forgot', element: <Forgot /> },
    { path: '/forgot/finally-forgot', element: <FinallyForgot /> },
    { path: '/sign-up/finally-register', element: <FinallyRegister /> },
    { path: '/', element: <Home />},
    { path: '/study', element: <TeacherList />},
])