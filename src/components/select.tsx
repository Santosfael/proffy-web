import { ChevronDown } from "lucide-react"
import type { SelectHTMLAttributes } from "react"
import type { UseFormRegister } from "react-hook-form"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string
    label: string
    labelColor?: "text-text-purple-base" | "text-text-complement"
    bgColor?: "bg-white" | "bg-white-shape"
    spanLabel?: string
    options: Array<{
        value: string,
        label: string
    }>
    optionDefault: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegister<any>
    error?: unknown
}


export function Select({
    name,
    label,
    labelColor = "text-text-purple-base",
    bgColor = "bg-white",
    spanLabel,
    options,
    optionDefault,
    register,
    error,
    ...rest }: SelectProps) {
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
                <select
                    id={name}
                    defaultValue=""
                    {...(register ? register(name) : {})}
                    {...rest}
                    className={`
                        w-full h-[56px]
                        ${bgColor}
                        rounded-lg
                        focus:outline-hidden
                        focus:border-purple
                        focus:border-1
                        ps-6
                        pr-10
                        font-poppins-regular
                        text-base
                        text-text-input
                        ${error ? "border-red-500" : "border-gray-lines-in-white"}
                        border-1
                        appearance-none
                    `}
                >
                    <option
                        value=""
                        disabled
                        hidden
                        className="font-poppins-regular text-base text-text-input"
                    >
                        {optionDefault}
                    </option>
                    {
                        options.map(option => {
                            return <option
                                className="text-text-base"
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        })
                    }
                </select>
                <ChevronDown
                    className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                />
            </div>
        </>
        
    )
}