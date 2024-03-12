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
            className={` ${className}`}
        />
    )
}