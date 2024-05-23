import { useState } from "react";

const Pill = (props:any) => {

    const [isColor1, setIsColor1] = useState(true);

    const changeColor = () => {
        setIsColor1(!isColor1);
    };
    return (
        <button 
            onClick={changeColor}
            disabled={props.disabled}
            className={`rounded-full ml-3 mb-4 px-4 ${isColor1 ? 'border border-custom-gray-background bg-white' : 'border border-white bg-custom-green-svg'}`}>
            <div className="flex items-center">
                    <svg
                        className={`h-3 w-3 ${isColor1 ? 'text-custom-green-svg' : 'text-white'}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />{" "}
                        <line x1="16" y1="2" x2="16" y2="6" />{" "}
                        <line x1="8" y1="2" x2="8" y2="6" />{" "}
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                <div className={`py-2 pl-2 ${isColor1 ? 'text-custom-gray-text' : 'text-white'}`}>
                    {props.title}
                </div>
            </div>
        </button>
    );
}
export default Pill