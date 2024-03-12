export default function Button({ children, className }) {
    
    return (
        <button
            className={`flex justify-center items-center mt-4 rounded-md px-14 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 ${className}`}
        >
            {children}
        </button>
    )
}
