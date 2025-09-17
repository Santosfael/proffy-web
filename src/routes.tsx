import { createBrowserRouter } from "react-router"
import { Home } from "./pages/app/home"
import { SignIn } from "./pages/auth/sign-in"
import { SignUp } from "./pages/auth/sign-up"

export const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/sign-up', element: <SignUp/> }
])