import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface pillPropTypes {
  disabled: boolean;
  isActive: boolean;
  title: string;
  icon: IconDefinition;
  onClick: () => void;
}

const Pill = (props: pillPropTypes) => {
  const { disabled, isActive, title, icon, onClick } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`mb-2 mr-2 rounded-full px-3 ${
        isActive
          ? "border border-white bg-custom-green-svg"
          : "border border-custom-gray-background bg-white"
      }`}
    >
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={icon}
          className={`h-3 w-3 ${isActive ? "text-white" : "text-custom-green-svg"}`}
        />
        <div
          className={`py-2 pl-2 ${
            isActive ? "text-white" : "text-custom-gray-text"
          } xs:text-xs sm:text-xs md:text-sm lg:text-sm`}
        >
          {title}
        </div>
      </div>
    </button>
  );
};

export default Pill;
