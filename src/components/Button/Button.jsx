import { useContext } from "react";

import { QuestionContext } from "../../Context";
const Button = ({ children, correct }) => {
  const { random } = useContext(QuestionContext);
  const handleRandom = () => {
    random();
  };
  if (correct === true) {
    return (
      <button className="border border-gray-400 w-full p-2 font-bold rounded-lg text-white bg-green-500">
        Correct
      </button>
    );
  } else if (correct === false) {
    return (
      <button className="border border-gray-400 w-full p-2 font-bold rounded-lg text-white bg-red-500">
        Incorrect
      </button>
    );
  }
  return (
    <button
      className="border border-gray-400 w-full text-left p-2 rounded-lg text-gray-500 hover:text-white hover:bg-yellow-400 hover:border-transparent font-medium hover:transition-all duration-500"
      onClick={() => handleRandom()}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
