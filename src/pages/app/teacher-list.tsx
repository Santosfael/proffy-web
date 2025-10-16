import { Link } from "react-router"
import goBack from "../../assets/goback-another-purple.svg"
import proffyLogo from "../../assets/proffy-logo.svg"
import foundIcon from "../../assets/found-icon.svg"
import { InputSearch } from "../../components/input-search"
import { TeacherItem } from "../../components/teacher-item"
import { Select } from "../../components/select"

export function TeatcheList() {
    return (
        <div className="w-full min-h-screen items-center flex flex-col align-top bg-background antialiased">
            <div className=" w-full flex flex-row justify-center items-center bg-dark-purple h-[64px]">
                <header className="flex justify-between items-center min-w-7xl">
                    <Link to={"/"}>
                        <img src={goBack} alt="" className="w-8 h-12" />
                    </Link>
                    <h1 className="text-text-purple-base font-archivo-semibold text-base">Estudar</h1>
                    <img src={proffyLogo} alt="" className="w-12 h-4" />
                </header>
            </div>

            <div className=" w-full flex flex-col items-center bg-purple h-[256px]">
                <div className="flex justify-between items-center min-w-4xl mt-[64px]">
                    <h1 className="font-archivo-bold text-4xl text-white">
                        Estes são os<br/> proffys disponíveis.
                    </h1>

                    <div className="flex flex-row gap-4 items-center">
                        <img src={foundIcon} alt="" className="w-8 h-8" />
                        <span className="font-poppins-regular text-sm text-text-purple-base">
                            Nós temos 32<br/>professores.
                        </span>
                    </div>
                </div>

                <form className="flex justify-between items-center min-w-4xl mt-12">
                   <div className="flex flex-col w-[17rem]">
                        <Select
                            label="Matéria"
                            name="subject"
                            optionDefault="Selecione"
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

                    <div className="flex flex-col w-[17rem]">
                        <Select
                            label="Dia da semana"
                            name="week_day"
                            bgColor="bg-white-shape"
                            optionDefault="Selecione"
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

                     <div className="flex flex-col w-[17rem] justify-items-start">
                        <InputSearch
                            name="hour"
                            label="Horário"
                            placeholder="Selecione"
                            type="time"
                        />
                    </div>
                </form>
            </div>

            <main className="flex flex-col w-full max-w-4xl justify-center mb-10 overflow-hidden">
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}