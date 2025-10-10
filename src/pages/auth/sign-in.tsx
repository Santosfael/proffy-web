import { Check } from 'lucide-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import heart from '../../assets/heart.svg'
import { BackgroundIntro } from '../../components/background-intro'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { toast } from 'sonner'
import { Link } from 'react-router'

const signInForm = z.object({
    email: z.email("E-mail inválido"),
    password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres")
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            isSubmitted,
            errors,
            isValid
        }
    } = useForm<SignInForm>({
        resolver: zodResolver(signInForm),
        mode: "onChange"
    })

    async function handleSignIn(data: SignInForm) {
        try {
            console.log(data)
        } catch {
            toast.error("Credenciais inválidas")
        }

        reset()
    }

    return (
        <div className="grid min-h-screen grid-cols-5 antialiased">
            <BackgroundIntro />
            <div className="bg-background col-span-2 flex flex-col h-full items-center justify-center">
                <div className="p-8">
                <div className="w-[352px] flex flex-col justify-center gap-6">
                    <h1 className="text-3xl font-poppins-semibold text-text-title">Fazer Login</h1>

                    <form onSubmit={handleSubmit(handleSignIn)}>
                    <Input
                        type="email"
                        id="email"
                        placeholder="E-mail"
                        rounded="top"
                        register={register}
                        error={errors.email}
                    />

                    <Input
                        type="password"
                        id="password"
                        placeholder="Senha"
                        rounded="bottom"
                        borderWidthTop="border-t-0"
                        register={register}
                        error={errors.password}
                    />

                    <div className="gap-4 flex flex-row mt-6 mb-10 justify-between">
                        <label htmlFor="checkbox-remember" className="flex items-center gap-2 cursor-pointer">
                        <span className="relative flex items-center justify-center">
                            <input
                            type="checkbox"
                            id="checkbox-remember"
                            className="w-6 h-6 rounded-lg checked:bg-green bg-white appearance-none"
                            />

                            <Check className="absolute w-4 h-4 text-white checked:opacity-100"/>
                        </span>

                        <span className="font-poppins-regular font-base text-text-complement">
                            Lembrar-me
                        </span>
                        </label>

                        <button
                        type="button"
                        className="font-poppins-regular font-base text-text-complement cursor-pointer"
                        >
                        Esqueci minha senha
                        </button>
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitted || !isValid}
                        title="Entrar"
                    />
                    </form>
                </div>

                <footer className="mt-30 w-full">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                        <p className="font-poppins-regular text-text-complement">Não tem conta?</p>
                        <button type="button" className="font-poppins-semibold text-left underline text-purple">
                            <Link to={'/sign-up'}>Cadastre-se</Link>
                        </button>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                        <p className="font-poppins-regular text-text-complement">é de graça</p> 
                        <img src={heart} alt="coração" className="w-4"/>
                        </div>
                    </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}