type ButtonProps = {
    type?: "button" | "submit" | "reset"
    title: string
    disabled?: boolean
}

export function Button({ type = "submit", title, disabled }: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
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