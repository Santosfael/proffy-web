import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string
    labelColor?: "text-text-purple-base" | "text-text-complement"
    bgColor?: "bg-white" | "bg-white-shape"
    spanLabel?: string
}


export function InputSearch({
    name,
    label,
    labelColor = "text-text-purple-base",
    bgColor = "bg-white",
    spanLabel,
    ...rest }: InputProps) {

    return (
        <>
            <label
                htmlFor={name}
                className= {`font-poppins-regular ${labelColor} text-sm/loose mb-2`}
            >
                {label}
                {spanLabel &&
                    <span className="ms-4 font-poppins-regular text-xs text-text-input">{spanLabel}</span>
                }
            </label>

            <div className="relative w-full">
            <input
                type="text"
                name=""
                id={name}
                { ...rest }
                className={
                        `peer
                        w-full h-[56px] 
                        ${bgColor}
                        rounded-lg
                        focus:outline-hidden
                        ps-6
                        font-poppins-regular
                        text-base
                        placeholder:text-text-input
                        border-gray-lines-in-white
                        border-1`
                    }
            />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[2px] bg-purple scale-x-0 transition-transform duration-300 peer-focus:scale-x-100"></span>
            </div>
        </>
        
    )
}