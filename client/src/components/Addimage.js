import { useRef, useState } from 'react';


export default function Addimage() {
    // const [foto, setFoto] = useState(null);
    // const [fotoUrl, setFotoUrl] = useState('');

    // const handleFotoChange = (e) => {
    //     const file = e.target.files[0];
    //     setFoto(file);
    //     setFotoUrl(URL.createObjectURL(file));
    // };

    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    }

    return (
        <>

            <div className="flex flex-col items-center justify-center">
                <div onClick={handleImageClick} className="h-24 w-24 flex flex-col justify-center items-center">
                    {image ? (
                        <img src={URL.createObjectURL(image)} className="cursor-pointer h-[95px] w-[100px] rounded-full" /> 
                    ) : ( 
                    <img src={process.env.PUBLIC_URL + '/place-image.png'} className="cursor-pointer h-[95px] w-100px]" />
                    )}

                    <label>
                        <input type='file' ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                    </label>
                </div>
            </div>
        </>
    )
}