export default function Button({ children, variant = "primary", size = "medium" , onClick}) {
    const baseClasses = "font-semibold rounded-lg transition hover:opacity-90";

    const variantClasses = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-500 text-white hover:bg-red-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        custom: "border-2 border-red-800 hover:bg-red-800 hover:text-white",
    };

    const sizeClasses = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    return (
        <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}>
            {children}
        </button>
    )
}