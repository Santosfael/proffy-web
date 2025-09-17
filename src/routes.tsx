import { createBrowserRouter } from "react-router"
import { Home } from "./pages/app/home"
import { SignIn } from "./pages/auth/sign-in"

export const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/sign-in', element: <SignIn/> }
])