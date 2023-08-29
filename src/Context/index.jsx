import { useEffect, useState, createContext } from "react";

export const QuestionContext = createContext();

export const QuestionContextProvider = ({ children }) => {
  const API = "https://restcountries.com/v3.1/all";
  const [capital, setCapital] = useState("");
  const [randomNumber, setRandomNumber] = useState();
  const [answers, setAnswers] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [selected, setseleted] = useState("");
  const [hasSelected, setHasSelected] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setCapital(`${data[randomNumber].capital[0]}`);
        setCorrectAnswer(`${data[randomNumber].name.common}`);
        setAnswers([
          `${data[randomNumber].name.common}`,
          `${data[Math.floor(Math.random() * (249 - 1))].name.common}`,
          `${data[Math.floor(Math.random() * (249 - 2))].name.common}`,
          `${data[Math.floor(Math.random() * (249 - 3))].name.common}`,
        ]);
      });
  }, [randomNumber]);
  function random() {
    setRandomNumber([Math.floor(Math.random() * 249)]);
    return Math.floor(Math.random() * 249);
  }
  useEffect(() => {
    if (selected === correctAnswer) {
      const value = true;
      setIsCorrect(value);
    } else {
      const value = false;
      setIsCorrect(value);
    }
  }, [selected, correctAnswer]);

  return (
    <QuestionContext.Provider
      value={{
        capital,
        random,
        answers,
        correctAnswer,
        selected,
        setseleted,
        hasSelected,
        setHasSelected,
        isCorrect,
        setIsCorrect,
        count,
        setCount,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
