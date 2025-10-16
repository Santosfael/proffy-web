import { Link } from "react-router"
import goBack from "../../assets/goback-another-purple.svg"
import proffyLogo from "../../assets/proffy-logo.svg"
import rocketIcon from "../../assets/rocket.svg"
import { InputSearch } from "../../components/input-search"
import attentionIcon from "../../assets/attention.svg"
import { TextArea } from "../../components/text-area"
import { Select } from "../../components/select"
import { useState } from "react"

export function TeacherForms() {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: "", to: "" }
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: "", to: "" }
        ])
    }

    return (
        <div className="w-full items-center flex flex-col align-top bg-background antialiased overflow-x-hidden">
            <div className="w-full flex flex-row justify-center items-center bg-dark-purple h-[64px]">
                <header className="flex w-full justify-between items-center max-w-7xl">
                    <Link to={"/"}>
                        <img src={goBack} alt="" className="w-8 h-12" />
                    </Link>
                    <h1 className="text-text-purple-base font-archivo-semibold text-base">Dar aulas</h1>
                    <img src={proffyLogo} alt="" className="w-12 h-4" />
                </header>
            </div>
            

            <div className=" w-full flex flex-col items-center bg-purple h-[352px]">
                <div className="flex w-full justify-between items-center max-w-4xl mt-[64px]">
                     <h1 className="font-archivo-bold text-4xl text-white">
                        Estes são os<br/> proffys disponíveis.
                    </h1>
                </div>
                <div className="flex justify-between items-center w-full max-w-4xl mt-[24px]">
                    <h1 className="font-poppins-regular text-base text-text-purple-base">
                        O primeiro passo, é preenche esse<br /> formulário de inscrição.
                    </h1>

                    <div className="flex flex-row gap-4 items-center">
                        <img src={rocketIcon} alt="" className="w-8 h-8" />
                        <span className="font-poppins-regular text-sm text-text-purple-base">
                            Prepare-se!<br/>vai ser o máximo.
                        </span>
                    </div>
                </div>
            </div>

            <main className="flex flex-col w-full max-w-4xl justify-center my-auto bg-white border-1 border-gray-lines-in-white rounded-lg -mt-[3.2rem] overflow-hidden pt-16 mb-16">
                <fieldset className="flex flex-col items-center mx-16">
                    <legend className="flex w-full items-center justify-between pb-10 mb-10 font-archivo-semibold text-2xl text-text-title border-b-1 border-gray-lines-in-white">
                        Seus Dados
                    </legend>

                    <div className="flex flex-row w-full justify-between">
                        <div className="flex items-center">
                            <img
                                className="w-[5rem] h-[5rem] rounded-full"
                                src="https://avatars.githubusercontent.com/u/15871684?v=4"
                                alt="Rafael Rocha"
                            />
                            <strong className="font-archivo-semibold text-2xl text-text-title block ms-6">
                                Rafael Rocha
                            </strong>
                        </div>

                        <div className="flex flex-col">
                            <InputSearch
                                name="whatsapp"
                                label="Whatsapp"
                                placeholder="( ) _ ____ ____"
                                labelColor="text-text-complement"
                                bgColor="bg-white-shape"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full max-w-full mt-8">
                        <TextArea
                            label="Biografia"
                            name="biography"
                            labelColor="text-text-complement"
                            bgColor="bg-white-shape"
                            spanLabel="(Máximo 300 caracteres)"
                        />
                    </div>
                </fieldset>

                <fieldset className="flex items-center justify-between mx-16 mt-16">
                    <legend className="flex w-full items-center justify-between pb-6 font-archivo-semibold text-2xl text-text-title border-b-1 border-gray-lines-in-white">
                        Sobre a aula
                    </legend>

                    <div className="grid grid-cols-5 w-full gap-8">
                        <div className="flex flex-col w-full mt-8 col-span-3">
                            <Select
                                label="Matéria"
                                name="subject"
                                labelColor="text-text-complement"
                                bgColor="bg-white-shape"
                                optionDefault="Selecione qual você quer ensinar"
                                options={[
                                    { value: "Artes", label: "Artes" },
                                    { value: "Biologia", label: "Biologia" },
                                    { value: "Ciências", label: "Ciências" },
                                    { value: "Educação física", label: "Educação física" },
                                    { value: "Física", label: "Física" },
                                    { value: "Geografia", label: "Geografia" },
                                    { value: "História", label: "História" },
                                    { value: "Matemática", label: "Matemática" },
                                    { value: "Português", label: "Português" },
                                    { value: "Química", label: "Química" },
                                ]}
                            />
                        </div>

                        <div className="flex flex-col w-full mt-8 col-span-2">
                            <InputSearch
                                label="Custo da sua hora por aula"
                                name="cost"
                                labelColor="text-text-complement"
                                bgColor="bg-white-shape"
                                placeholder="R$"
                            />
                        </div>
                    </div>
                </fieldset>

                <fieldset className="flex flex-col items-center justify-between mx-16 mt-16">
                    <legend className="flex w-full items-center justify-between pb-6 font-archivo-semibold text-2xl text-text-title border-b-1 border-gray-lines-in-white">
                        Horários disponíveis
                        <button 
                            className="text-base text-purple cursor-pointer hover:text-dark-purple transation"
                            onClick={addNewScheduleItem}
                        >
                            + Novo horário
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="border-b-1 border-gray-lines-in-white">
                                <div className="grid grid-cols-8 w-full gap-8 mb-4">
                                    <div className="flex flex-col w-full mt-8 col-span-4">
                                        <Select
                                            label="Dia da semana"
                                            name="week_day"
                                            labelColor="text-text-complement"
                                            bgColor="bg-white-shape"
                                            optionDefault="Selecione o dia"
                                            options={[
                                                { value: "0", label: "Domingo" },
                                                { value: "1", label: "Segunda" },
                                                { value: "2", label: "Terça" },
                                                { value: "3", label: "Quarta" },
                                                { value: "4", label: "Quinta" },
                                                { value: "5", label: "Sexta" },
                                                { value: "6", label: "Sábado" }
                                            ]}
                                        />
                                    </div>

                                    <div className="flex flex-col w-full mt-8 col-span-2">
                                        <InputSearch
                                            label="Das"
                                            name="from"
                                            labelColor="text-text-complement"
                                            bgColor="bg-white-shape"
                                        />
                                    </div>

                                    <div className="flex flex-col w-full mt-8 col-span-2">
                                        <InputSearch
                                            label="Até"
                                            name="to"
                                            labelColor="text-text-complement"
                                            bgColor="bg-white-shape"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })

                    }
                </fieldset>

                <footer
                    className="flex w-full px-16 mt-10 bg-white-shape items-center justify-between py-8 border-t-1 border-gray-lines-in-white"
                >
                    <div className="flex gap-4">
                        <img src={attentionIcon} alt="Aviso importante" className="w-8 h-8" />
                        <p className="font-poppins-regular text-xs text-purple items-center">
                            Importante!<br />
                            <span className="font-poppins-regular text-xs text-text-complement">
                                Preencha todos os dados corretamente.
                            </span>
                        </p>
                    </div>
                    <button className="flex gap-4 items-center bg-green hover:bg-green-dark cursor-pointer transition py-4 px-10 rounded-lg font-archivo-semibold text-base text-white" >
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}