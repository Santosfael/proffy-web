import background from '../../assets/background.svg'
import logo from '../../assets/logo.svg'
import heart from '../../assets/heart.svg'

import { Check } from 'lucide-react'

export function SignIn() {
    return (
    <div className="grid min-h-screen grid-cols-5 antialiased">
      <div className="bg-purple flex items-center justify-center col-span-3 relative">
        <img src={background} alt="background image" className="absolute"/>
        <img src={logo} alt="background image" className="absolute"/>
      </div>
      
      <div className="flex flex-col bg-background h-full items-center justify-center col-span-2">
          <div className="p-8">
            <div className='w-[352px] flex flex-col justify-center gap-6'>
              <h1 className='text-3xl font-poppins-semibold text-text-title'>Fazer Login</h1>
              
              <form action="">
                <input
                  type="email"
                  id="email"
                  className="block w-full text-text-complement p-5 text-base bg-white-shape font-poppins-regular border-2 border-gray-lines-in-white rounded-lg rounded-b-none"
                  placeholder="E-mail"
                />
                <input
                  type="text"
                  id="password"
                  className="block w-full text-text-complement p-5 text-base bg-white-shape font-poppins-regular border-2 border-gray-lines-in-white rounded-t-none rounded-lg  border-t-0"
                  placeholder="Senha"
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
                  <button type="button" className="font-poppins-regular font-base text-text-complement cursor-pointer">Esqueci minha senha</button>
                </div>

                <button type="submit" className="w-full bg-green p-5 border-none rounded-lg font-archivo-semibold text-white-shape cursor-pointer">
                  Entrar
                </button>
              </form>
            </div>
            <footer className="mt-30 w-full">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <p className="font-poppins-regular text-text-complement">Não tem conta?</p>
                  <button type="button" className="font-poppins-semibold text-left underline text-purple cursor-pointer">
                    Cadastre-se
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