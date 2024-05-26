import { useState } from "react";
import ToggleButtonWithText from "../../components/common/ToggleButtonWithText";
import { Counter } from "../../components/common/Counter";
import Gap from "../../components/common/Gap";

enum ToggleValue {
  Yes = "yes",
  No = "no",
}

const AccomodationRequest = () => {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount(count + 1);
  };
  const decrementHandler = () => {
    count !== 0 && setCount(count + 1);
  };
  const toggleOptions = [
    { value: ToggleValue.Yes, label: "yes" },
    { value: ToggleValue.No, label: "no" },
  ];

  const handleToggle = (value: ToggleValue) => {
    console.log("Selected:", value);
  };
  return (
    <div>
      <ToggleButtonWithText
        options={toggleOptions}
        initialValue={toggleOptions[0].value}
        onToggle={handleToggle}
      />
      <Gap gap={4} />
      <Counter
        count={count}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
      />
    </div>
  );
};

export default AccomodationRequest;
