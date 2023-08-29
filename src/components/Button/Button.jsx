import { useContext } from "react";

import { QuestionContext } from "../../Context";

const Button = ({ children, id }) => {
  const {
    random,
    setseleted,
    setHasSelected,
    setIsCorrect,
    isCorrect,
    selected,
    correctAnswer,
    hasSelected,
    setCount,
    count,
  } = useContext(QuestionContext);

  const handleRandom = () => {
    random();
    setseleted("");
    setHasSelected(false);
    setIsCorrect(undefined);
    if (isCorrect) {
      const ncount = count + 1;
      setCount(ncount);
    }
  };
  const handleOption = () => {
    setseleted(id);
    setHasSelected(true);
  };
  if (isCorrect && id === correctAnswer && selected === correctAnswer) {
    return (
      <button
        className={
          "border border-transparent w-full p-2 rounded-lg text-white bg-green-500"
        }
        disabled
      >
        <span>{children}</span>
      </button>
    );
  } else if (id === selected && isCorrect === false) {
    return (
      <button
        className={
          "border border-transparent w-full p-2 rounded-lg text-white bg-red-500"
        }
        disabled
      >
        <span>{children}</span>
      </button>
    );
  } else if (id && hasSelected) {
    return (
      <button
        className={
          "border border-gray-400 w-full p-2 rounded-lg text-gray-500 hover:text-white hover:bg-yellow-400 hover:border-transparent font-medium hover:transition-all duration-500"
        }
        disabled
      >
        <span>{children}</span>
      </button>
    );
  } else if (id) {
    return (
      <button
        className={
          "border border-gray-400 w-full p-2 rounded-lg text-gray-500 hover:text-white hover:bg-yellow-400 hover:border-transparent font-medium hover:transition-all duration-500"
        }
        onClick={() => handleOption()}
      >
        <span>{children}</span>
      </button>
    );
  } else {
    return (
      <button
        className="border border-gray-400 w-full p-2 rounded-lg text-gray-500 hover:text-white hover:bg-yellow-400 hover:border-transparent font-medium hover:transition-all duration-500"
        onClick={() => handleRandom()}
      >
        <span>{children}</span>
      </button>
    );
  }
};

export default Button;
