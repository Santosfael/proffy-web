type ButtonProps = {
    type?: "button" | "submit" | "reset"
    text: string
    disabled?: boolean
}

export function Button({ type = "submit", text, disabled = false }: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`w-full p-5 border-none rounded-lg font-archivo-semibold mt-10
            ${disabled
            ? "bg-gray-shape text-text-complement cursor-not-allowed" 
            : "bg-green opacity-90 hover:bg-green hover:opacity-100  text-white cursor-pointer"
            }`}
        >
            {text}
        </button>
    )
}