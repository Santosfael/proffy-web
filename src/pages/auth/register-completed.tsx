import backgroundFinaly from '../../assets/background-finaly.svg'
import done from '../../assets/done.svg'
import { Button } from '../../components/button'

export function RegisterCompleted() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center relative h-full bg-purple">
            <img src={backgroundFinaly} alt="imagem de fun" className="absolute" />
            <div className="flex flex-col items-center justify-center absolute">
                <img src={done} alt="" />
                <h1 className="font-archivo-bold text-white text-6xl mt-10">
                    Cadastro concluído
                </h1>
                <p className="font-poppins-regular text-base text-text-purple-base mt-6">
                    Agora você faz parte da plataforma da Proffy
                </p>
                <p className="font-poppins-regular text-base text-text-purple-base">
                    Tenha uma ótima experiência.
                </p>

                <div className="w-[161px] mt-10">
                     <Button
                        text="Fazer login"
                        type="button"
                        link="/sign-in"
                        disabled={false}
                    />
                </div>
            </div>
        </div>
    )
}