import backgroundFinaly from '../../assets/background-finaly.svg'
import done from '../../assets/done.svg'
import { Button } from '../../components/button'

export function ForgotSend() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center relative h-full bg-purple">
            <img src={backgroundFinaly} alt="imagem de fun" className="absolute" />
            <div className="flex flex-col items-center justify-center absolute">
                <img src={done} alt="" />
                <h1 className="font-archivo-bold text-white text-6xl mt-10">
                    Redefinição enviada!
                </h1>
                <p className="font-poppins-regular text-base text-text-purple-base mt-6">
                    Boa, agora é só checar o e-mail que foi enviado para você,<br/>
                    redefinir sua senha e aproveitar os estudos.
                </p>

                <div className="w-[185px] mt-10">
                     <Button
                        title="Voltar ao login"
                        type="button"
                        disabled={false}
                    />
                </div>
            </div>
        </div>
    )
}