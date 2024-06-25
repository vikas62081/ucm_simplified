interface AlertProps {
  heading: string;
  message: string;
  color: string;
  textAlign?: "center" | "left";
}

const Alert = (props: AlertProps) => {
  const { heading, message, color, textAlign } = props;
  return (
    <div className="rounded-lg p-3 py-2 " style={{ backgroundColor: color }}>
      <div
        className={`md:text-md sm:text-md ${textAlign === "center" ? "text-center" : "text-left"} font-semibold xs:text-sm`}
        style={{ color: "#4B4B4B" }}
      >
        {heading}
      </div>
      <div
        className={`py-1 ${textAlign === "center" ? "text-center" : "text-left"} text-black xs:text-xs sm:text-xs md:text-xs`}
      >
        {message}
      </div>
    </div>
  );
};
export default Alert;
