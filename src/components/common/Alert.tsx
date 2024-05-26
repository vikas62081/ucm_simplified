interface AlertProps {
    heading: string;
    message: string;
    color: string;
}

const Alert = (props:AlertProps) => {
    const { heading, message, color } = props;
    return (
        <div className="mt-4 p-3 rounded-lg" style={{backgroundColor: color}}>
            <div className="font-semibold" style={{color: '#4B4B4B'}}>
                {heading}
            </div>
            <div className="py-3 text-sm text-black">
                {message}
            </div>
        </div>
    )
}
export default Alert