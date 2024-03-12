export default function Input ({type, placeholder, className }) {

    return (
        <input
            // id={}
            // name={}
            // value={email}
            // onChange={(e) => set..(e.target.value)}
            type={type}
            // autoComplete="email"
            // required
            placeholder={placeholder}
            className={`w-full rounded-md py-2 text-gray-900 ring-1 ring-inset ring-purple-300 placeholder:text-gray-400 focus:ring-yellow-300 sm:text-sm sm:leading-6 outline-none ${className}`}
        />
    )
}