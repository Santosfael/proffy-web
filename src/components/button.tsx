import { Link } from "react-router"

type ButtonProps = {
    type?: "button" | "submit" | "reset"
    text: string
    disabled?: boolean
    link?: string
}

export function Button({ type = "submit", text, disabled = false, link = "" }: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`w-full p-5 border-none rounded-lg font-archivo-semibold mt-10
            ${disabled
            ? "bg-gray-shape text-text-complement cursor-not-allowed" 
            : "bg-green opacity-90 hover:bg-green hover:opacity-100 transition text-white cursor-pointer"
            }`}
        >
            <Link to={link}>{text}</Link>
        </button>
    )
}