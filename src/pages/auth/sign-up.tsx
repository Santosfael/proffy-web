import { BackgroundIntro } from "../../components/background-intro";
import { Input } from "../../components/input";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../../components/button";

import goBack from "../../assets/goback.svg"

const signUpForm = z.object({
    name: z.string().min(4, 'Digite um nome válido'),
    lastName: z.string().min(4, 'Digite um sobrenome válido'),
    email: z.email('E-mail inválido'),
    password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres"),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
    const { 
            register,
            handleSubmit,
            reset,
            formState: {
                isSubmitting,
                errors,
                isValid
              }
            } = useForm<SignUpForm>({
        resolver: zodResolver(signUpForm),
        mode: "onChange"
    })

    async function handleSignIn(data: SignUpForm) {
        try {
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
          <div className="flex flex-col bg-background h-full col-span-2 items-center justify-center">
            <div className="relative w-[352px]">
              <button className="absolute left-0 cursor-pointer">
                <img src={goBack} alt="" className="w-8 h-12" />
              </button>

              <div className="flex flex-col">
                <div className="pt-30">
                  <div className='flex flex-col justify-center gap-6'>
                    <h1 className='text-3xl font-poppins-semibold text-text-title'>Cadastro</h1>

                    <h3 className="font-poppins-regular text-base text-text-base">
                      Preencha os dados abaixo<br/>para começar.
                    </h3>
                    
                    <form onSubmit={handleSubmit(handleSignIn)}>
                      <Input
                          id="name"
                          type="text"
                          placeholder="Nome"
                          register={register}
                          error={errors.name}
                          rounded="top"
                      />

                      <Input
                          id="lastName"
                          type="text"
                          placeholder="Sobrenome"
                          register={register}
                          error={errors.lastName}
                          rounded="none"
                      />

                      <Input
                          id="email"
                          type="email"
                          placeholder="E-mail"
                          register={register}
                          error={errors.email}
                          rounded="none"
                      />

                      <Input
                          id="password"
                          type="password"
                          placeholder="Senha"
                          register={register}
                          error={errors.password}
                          rounded="bottom"
                      />

                      <Button
                        type="submit"
                        text="Concluir cadastro"
                        disabled={isSubmitting || !isValid}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <BackgroundIntro />
      </div>
    )
}