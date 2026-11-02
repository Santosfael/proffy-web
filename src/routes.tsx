import { createBrowserRouter } from "react-router"
import { Home } from "./pages/app/home"
import { SignIn } from "./pages/auth/sign-in"
import { SignUp } from "./pages/auth/sign-up"
import { RegisterCompleted } from "./pages/auth/register-completed"
import { Forgot } from "./pages/auth/forgot"
import { ForgotSend } from "./pages/auth/forgot-send"
import { TeatcheList } from "./pages/app/teacher-list"
import { TeacherForms } from "./pages/app/teacher-forms"
import { TeacherFormsCompleted } from "./pages/app/teacher-forms-completed"

export const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/study', element: <TeatcheList /> },
    { path: '/give-classes', element: <TeacherForms /> },
    { path: '/give-classes/register-completed', element: <TeacherFormsCompleted /> },
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