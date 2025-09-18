import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import heart from '../../assets/heart.svg'
import { Check } from 'lucide-react'
import { BackgroundIntro } from '../../components/background-intro'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Input } from '../../components/input'


const signInForm = z.object({
    email: z.email('E-mail inválido'),
    password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres"),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {

    const { 
            register,
            handleSubmit,
            reset,
            formState: {
                    isSubmitting,
                    errors,
                    isValid
                }
            } = useForm<SignInForm>({
        resolver: zodResolver(signInForm),
        mode: "onChange"
    })

    async function handleSignIn(data: SignInForm) {
        try {
            throw new Error()
            console.log(data)
            await new Promise((resolve) => setTimeout(resolve, 2000))
            toast.success('Credenciais validas')
        } catch {
            toast.error('Credenciais inválidas')
        }
        
        reset()
    }

    return (
        <div className="grid min-h-screen grid-cols-5 antialiased">
        <BackgroundIntro />
        
        <div className="flex flex-col bg-background h-full items-center justify-center col-span-2">
            <div className="p-8">
                <div className='w-[352px] flex flex-col justify-center gap-6'>
                <h1 className='text-3xl font-poppins-semibold text-text-title'>Fazer Login</h1>
                
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <Input
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        register={register}
                        error={errors.email}
                        rounded="top"
                    />

                    <Input
                        type="password"
                        id="password"
                        placeholder="Senha"
                        register={register}
                        error={errors.password}
                        rounded="bottom"
                    />

                    <div className='gap-4 flex flex-row mt-6 mb-10 justify-between'>
                    <label htmlFor="checkbox-remember" className="flex items-center gap-2 cursor-pointer">
                        <span className="relative flex items-center justify-center">
                            <input id="checkbox-remember" type="checkbox" className="w-6 h-6 rounded-lg checked:bg-green bg-white appearance-none" />
                            <Check
                                className="absolute w-4 h-4 text-white checked:opacity-100"
                            />
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

                    <button
                        type="submit"
                        disabled={isSubmitting || !isValid}
                        className={`w-full p-5 border-none rounded-lg font-archivo-semibold
                        ${isSubmitting || !isValid
                        ? "bg-gray-shape text-text-complement cursor-not-allowed" 
                        : "bg-green opacity-90 hover:bg-green hover:opacity-100  text-white cursor-pointer"
                        }`}
                    >
                        Entrar
                    </button>
                </form>
                </div>
                <footer className="mt-30 w-full">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                    <p className="font-poppins-regular text-text-complement">Não tem conta?</p>
                    <button type="button" className="font-poppins-semibold text-left underline text-purple cursor-pointer">
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