import whatsAppIcon from "../assets/Whatsapp.svg"

export function TeacherItem() {
    return (
        <article className="bg-white border-1 border-gray-lines-in-white rounded-lg mt-10">
            <header className="flex items-center py-[3.2rem] px-8">
                <img
                    className="w-[8rem] h-[8rem] rounded-full"
                    src="https://avatars.githubusercontent.com/u/15871684?v=4"
                    alt="Rafael Rocha"
                />
                <div className="ms-10">
                    <strong className="font-archivo-semibold text-2xl text-text-title block">
                        Rafael Rocha
                    </strong>
                    <span className="font-poppins-regular text-base text-text-base block">
                        Química
                    </span>
                </div>
            </header>
            <p className="px-8 font-poppins-regular text-base text-text-base">
                Entusiasta das melhores tecnologias de química avançada.<br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <div className="grid grid-cols-5 mx-8 gap-4 mt-8">
                <div className="flex flex-col col-span-1 p-4 border-1 bg-white-shape border-gray-lines-in-white rounded-lg">
                    <p className="font-poppins-regular text-sm text-text-complement">
                        Dia
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        Segunda
                    </strong>
                    <p className="font-poppins-regular text-sm text-text-complement mt-3">
                        Horário
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        8h - 18h
                    </strong>
                </div>

                <div className="flex flex-col col-span-1 p-4 border-1 bg-white-shape border-gray-lines-in-white rounded-lg">
                    <p className="font-poppins-regular text-sm text-text-complement">
                        Dia
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        Terça
                    </strong>
                    <p className="font-poppins-regular text-sm text-text-complement mt-3">
                        Horário
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        8h - 18h
                    </strong>
                </div>

                <div className="flex flex-col col-span-1 p-4 border-1 bg-white-shape border-gray-lines-in-white rounded-lg opacity-40">
                    <p className="font-poppins-regular text-sm text-text-complement">
                        Dia
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        Quarta
                    </strong>
                    <p className="font-poppins-regular text-sm text-text-complement mt-3">
                        Horário
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        8h - 18h
                    </strong>
                </div>

                <div className="flex flex-col col-span-1 p-4 border-1 bg-white-shape border-gray-lines-in-white rounded-lg">
                    <p className="font-poppins-regular text-sm text-text-complement">
                        Dia
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        Quinta
                    </strong>
                    <p className="font-poppins-regular text-sm text-text-complement mt-3">
                        Horário
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        8h - 18h
                    </strong>
                </div>

                <div className="flex flex-col col-span-1 p-4 border-1 bg-white-shape border-gray-lines-in-white rounded-lg opacity-40">
                    <p className="font-poppins-regular text-sm text-text-complement">
                        Dia
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        Sexta
                    </strong>
                    <p className="font-poppins-regular text-sm text-text-complement mt-3">
                        Horário
                    </p>
                    <strong className="font-archivo-bold text-base text-text-base">
                        -
                    </strong>
                </div>
            </div>

            <footer
                className="flex w-full mt-10 bg-white-shape items-center justify-between py-8 px-8 border-t-1 border-gray-lines-in-white rounded-b-lg"
            >
                <p className="font-poppins-regular text-sm text-text-complement flex items-center gap-4">
                    Preço/hora
                    <strong className="font-archivo-bold text-xl text-purple">
                        R$ 80,00
                    </strong>
                </p>
                <button className="flex gap-4 items-center bg-green hover:bg-green-dark cursor-pointer transition py-4 px-10 rounded-lg font-archivo-semibold text-base text-white" >
                    <img src={whatsAppIcon} alt="WhatsApp" className="w-5 h-5" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}