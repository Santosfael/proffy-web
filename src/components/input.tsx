type InputProps = {
    id: string
    type?: string
    placeholder: string
    rounded: "all" | "top" | "bottom" | "none"
    borderWidthTop?: string
}

export function Input({ id, type, placeholder, rounded = "all", borderWidthTop = "" }: InputProps) {
    const roundedClass = {
        all: "rounded-lg",
        top: "rounded-t-lg",
        bottom: "rounded-b-lg",
        none: ""
    }[rounded]

    return (
        <input
            type={type}
            id={id}
            className={`block w-full text-text-complement p-5 text-base bg-white-shape font-poppins-regular border-2 border-gray-lines-in-white ${roundedClass} ${borderWidthTop}`}
            placeholder={placeholder}
        />
    )
}