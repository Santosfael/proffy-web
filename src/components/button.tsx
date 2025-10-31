import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    disabled?: boolean
}

export function Button({ title, disabled, ...rest }: ButtonProps) {
    return (
        <button
            disabled={disabled}
            {...rest}
            className={`w-full p-5 border-none rounded-lg font-archivo-semibold mt-10
                    ${disabled
                        ? "bg-gray-shape text-text-complement cursor-not-allowed"
                        : "bg-green opacity-80 hover:bg-green hover:opacity-100 transition text-white cursor-pointer"
                    }
                `}
        >
            {title}
        </button>
    )
}