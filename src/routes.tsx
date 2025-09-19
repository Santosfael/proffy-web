import { createBrowserRouter } from "react-router"
import { Home } from "./pages/app/home"
import { SignIn } from "./pages/auth/sign-in"
import { SignUp } from "./pages/auth/sign-up"
import { RegisterCompleted } from "./pages/auth/register-completed"
import { Forgot } from "./pages/auth/forgot"
import { ForgotSend } from "./pages/auth/forgot-send"

export const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/',
        children: [
            { path: '/sign-up', element: <SignUp/> },
            { path: '/sign-up/register-completed', element: <RegisterCompleted/> },
            { path: '/forgot', element: <Forgot/> },
            { path: '/forgot/send-email', element: <ForgotSend/> },
        ]
    }
])