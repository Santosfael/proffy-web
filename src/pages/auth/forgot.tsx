import z from "zod";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../../components/button";

import { BackgroundIntro } from "../../components/background-intro";
import { Input } from "../../components/input";
import goBack from "../../assets/goback.svg";


const forgotForm = z.object({
  email: z.email('E-mail inválido')
})

type ForgotForm = z.infer<typeof forgotForm>

export function Forgot() {

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      isSubmitting,
      errors,
      isValid
    }
  } = useForm<ForgotForm>({
    resolver: zodResolver(forgotForm),
    mode: "onChange"
  })

  function goBackPage() {
    navigate(-1)
  }

  async function handleSendEmail(data: ForgotForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch {
      toast.error('Credenciais inválidas')
    }

    reset()
  }
  return (
    <div className="grid min-h-screen grid-cols-5 antialiased">
      <div className="flex flex-col bg-background h-full col-span-2 items-center justify-center">
        <div className="relative w-[352px] mt-[-200px]">
          <button className="absolute left-0 cursor-pointer mt-[-200px]" onClick={goBackPage}>
            <img src={goBack} alt="" className="w-8 h-12" />
          </button>

          <div className="flex flex-col">
            <div className="pt-30">
              <div className='flex flex-col justify-center gap-6'>
                <h1 className='text-3xl font-poppins-semibold text-text-title'>Eita, esqueceu<br />sua senha?</h1>

                <h3 className="font-poppins-regular text-base text-text-base">
                  Não esquenta, vamos dar um jeito nisso.
                </h3>

                <form onSubmit={handleSubmit(handleSendEmail)}>

                  <Input
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    register={register}
                    error={errors.email}
                    rounded="all"
                  />

                  <Button
                    type="submit"
                    text="Enviar"
                    disabled={isSubmitting || !isValid}
                    link="/forgot/send-email"
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