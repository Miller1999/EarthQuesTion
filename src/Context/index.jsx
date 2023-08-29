import { useEffect, useState, createContext } from "react";

export const QuestionContext = createContext();

export const QuestionContextProvider = ({ children }) => {
  const API = "https://restcountries.com/v3.1/all";
  const [capital, setCapital] = useState("");
  const [randomNumber, setRandomNumber] = useState();
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState();
  const [selected, setseleted] = useState("");
  const [hasSelected, setHasSelected] = useState(false);
  const [isCorrect, setIsCorrect] = useState();
  const [count, setCount] = useState(0);
  const [errors, setErrors] = useState(0);
  const [flag, setFlag] = useState("");
  const [type, setType] = useState();

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        if (errors < 1) {
          setFlag(`${data[randomNumber].flags.svg}`);
          setCapital(`${data[randomNumber].capital[0]}`);
          setCorrectAnswer(`${data[randomNumber].name.common}`);
          const shuffledAnswers = [
            ...new Set([
              `${data[randomNumber].name.common}`,
              `${data[Math.floor(Math.random() * (249 - 1))].name.common}`,
              `${data[Math.floor(Math.random() * (249 - 2))].name.common}`,
              `${data[Math.floor(Math.random() * (249 - 3))].name.common}`,
            ]),
          ];

          setAnswers(shuffledAnswers);
        }
      });
  }, [randomNumber, errors]);
  function random() {
    setRandomNumber(Math.floor(Math.random() * 249));
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
        errors,
        setErrors,
        type,
        setType,
        flag,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
