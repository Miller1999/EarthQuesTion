import { useEffect, useState, createContext } from "react";

export const QuestionContext = createContext();

export const QuestionContextProvider = ({ children }) => {
  const API = "https://restcountries.com/v3.1/all";
  const [capital, setCapital] = useState("");
  const [randomNumber, setRandomNumber] = useState();

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setCapital(`${data[randomNumber].capital[0]}`);
      });
  }, [randomNumber]);
  console.log(randomNumber);
  function random() {
    return setRandomNumber(Math.floor(Math.random() * 249));
  }

  return (
    <QuestionContext.Provider value={{ capital, random }}>
      {children}
    </QuestionContext.Provider>
  );
};
