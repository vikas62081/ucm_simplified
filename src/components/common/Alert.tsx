interface AlertProps {
  heading: string;
  message: string;
  color: string;
}

const Alert = (props: AlertProps) => {
  const { heading, message, color } = props;
  return (
    <div className="rounded-lg p-3 " style={{ backgroundColor: color }}>
      <div
        className="md:text-md sm:text-md text-center font-semibold xs:text-sm"
        style={{ color: "#4B4B4B" }}
      >
        {heading}
      </div>
      <div className=" py-1 text-center text-black xs:text-xs sm:text-xs md:text-xs">
        {message}
      </div>
    </div>
  );
};
export default Alert;
