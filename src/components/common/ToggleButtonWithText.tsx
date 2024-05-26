import { useState, useEffect, useRef } from "react";

//how to use?? ****
// Example with Temporary and Permanent values
//
// first set
// enum ToggleValue {
//     Permanent = "permanent",
//     Temporary = "temporary",
//   }
//
//second set
// const toggleOptions = [
//     { value: ToggleValue.Permanent, label: "Permanent" },
//     { value: ToggleValue.Temporary, label: "Temporary" },
//   ];

//   const handleToggle = (value: ToggleValue) => {
//     console.log("Selected:", value);
//   };

// Define a type for the toggle option
interface ToggleOption<T> {
  value: T;
  label: string;
}

// Define props using a generic type that extends string | number
interface ToggleButtonProps<T extends string | number> {
  options: ToggleOption<T>[];
  initialValue: T;
  onToggle: (value: T) => void; // Ensure the callback function has a strictly typed parameter
}

// Use a generic type for the functional component
const ToggleButtonWithText = <T extends string | number>({
  options,
  initialValue,
  onToggle,
}: ToggleButtonProps<T>): JSX.Element => {
  const [selected, setSelected] = useState<T>(initialValue);
  const [highlightStyle, setHighlightStyle] = useState({});
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const selectedIndex = options.findIndex(
      (option) => option.value === selected,
    );
    const selectedElement = optionRefs.current[selectedIndex];
    if (selectedElement) {
      setHighlightStyle({
        transform: `translateX(${selectedElement.offsetLeft}px)`,
        width: `${selectedElement.offsetWidth}px`,
        transition: "transform 300ms ease-in-out",
      });
    }
  }, [selected, options]);

  const handleToggle = (value: T) => {
    setSelected(value);
    onToggle(value);
  };

  return (
    <div
      className="relative flex overflow-hidden rounded-md border border-gray-300 bg-white"
      style={{ height: 48 }}
    >
      <div
        className="absolute h-full rounded-md bg-primary transition-transform duration-300 ease-in-out"
        style={highlightStyle}
      />
      {options.map((option, index) => (
        <div
          key={String(option.value)}
          ref={(el) => (optionRefs.current[index] = el)}
          className={`flex h-full flex-grow cursor-pointer select-none items-center justify-center text-sm
                      transition-colors duration-300 ease-in-out ${
                        selected === option.value
                          ? "z-10 text-white"
                          : "z-10 text-primary"
                      }`}
          onClick={() => handleToggle(option.value)}
          role="button"
          tabIndex={0}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default ToggleButtonWithText;
