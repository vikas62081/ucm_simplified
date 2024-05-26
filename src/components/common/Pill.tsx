interface pillPropTypes {
  disabled: boolean;
  isActive: boolean;
  title: string;
  onClick: () => void;
}

const Pill = (props: pillPropTypes) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`mb-4 ml-3 rounded-full px-4 ${
        props.isActive
          ? "bg-custom-green-svg border border-white"
          : "border-custom-gray-background border bg-white"
      }`}
    >
      <div className="flex items-center">
        <svg
          className={`h-3 w-3 ${props.isActive ? "text-white" : "text-custom-green-svg"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <div
          className={`py-2 pl-2 ${props.isActive ? "text-white" : "text-custom-gray-text"}`}
        >
          {props.title}
        </div>
      </div>
    </button>
  );
};
export default Pill;
