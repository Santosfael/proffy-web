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
            className="w-full bg-green p-5 border-none rounded-lg font-archivo-semibold text-white-shape"
        >
            {title}
        </button>
    )
}