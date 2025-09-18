import { BackgroundIntro } from "../../components/background-intro";
import { Input } from "../../components/input";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

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
          <div className="flex flex-col bg-background h-full items-center justify-center col-span-2">
            <div className="p-8">
              <div className='w-[352px] flex flex-col justify-center gap-6'>
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

                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className={`w-full p-5 border-none rounded-lg font-archivo-semibold mt-10
                    ${isSubmitting || !isValid
                    ? "bg-gray-shape text-text-complement cursor-not-allowed" 
                    : "bg-green opacity-90 hover:bg-green hover:opacity-100  text-white cursor-pointer"
                    }`}
                  >
                    Concluir cadastro
                  </button>
                </form>
              </div>
            </div>
          </div>

          <BackgroundIntro />
      </div>
    )
}