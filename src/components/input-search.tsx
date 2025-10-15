export function InputSearch() {
    return (
        <div className="relative w-[231px]">
        <input
            type="text"
            name=""
            id="subject"
            placeholder="Selecione"
            className={
                    `peer
                    w-full h-[56px] 
                    bg-white
                    rounded-lg
                    focus:outline-hidden
                    ps-6
                    font-poppins-regular
                    text-base
                    placeholder:text-text-input`
                }
        />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] h-[2px] bg-purple scale-x-0 transition-transform duration-300 peer-focus:scale-x-100"></span>
        </div>
    )
}