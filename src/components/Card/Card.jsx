import { Fragment, useContext } from "react";

import { QuestionContext } from "../../Context";
import Button from "../Button/Button";
import Planet from "../../assets/planet.svg";
import Winner from "../../assets/winner.svg";

const Card = () => {
  const {
    capital,
    answers,
    selected,
    isCorrect,
    count,
    errors,
    correctAnswer,
  } = useContext(QuestionContext);

  if (capital !== "" && errors <= 1) {
    return (
      <section className="flex flex-col justify-center items-center h-screen relative">
        <div>
          <div className="flex gap-24 items-center absolute top-5">
            <h1 className="text-white text-2xl font-bold mb-5">
              EarthQuesTion
            </h1>
            <img src={Planet} alt="Planet" className="h-24 w-24" />
          </div>

          <div className="bg-white p-10 rounded-lg flex flex-col h-[420px] gap-5 w-96 max-w-s">
            <h3 className="text-blue-500">{capital} is the capital of</h3>
            <div className="flex flex-col gap-6 items-start">
              {answers.sort().map((answer) => (
                <Button key={answer} id={answer} correct={isCorrect}>
                  {answer}
                </Button>
              ))}
            </div>
            {selected ? (
              <div className="w-24 ml-52">
                <Button>Next</Button>
              </div>
            ) : (
              <Fragment></Fragment>
            )}
          </div>
        </div>
      </section>
    );
  } else if (errors > 1) {
    return (
      <section className="flex flex-col justify-center items-center h-screen relative">
        <div>
          <div className="bg-white p-10 rounded-lg flex flex-col h-full gap-5 w-96 max-w-s items-center">
            <div className="flex flex-col gap-1 items-center">
              <img src={Winner} alt="Winner" className="h-52 w-52" />
              <h1 className="text-blue-900 text-2xl font-bold mb-5">Results</h1>
            </div>
            <p className="text-black text-lg text-center">
              The correct answer was{" "}
              <span className="text-green-500">{correctAnswer}</span>
            </p>
            <p className="text-black text-lg text-center">
              You got <span className="text-green-500">{count}</span> answers
            </p>
            <div className="flex flex-col gap-6 items-start w-3/4">
              <Button id="try">Try again</Button>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="flex flex-col justify-center items-center h-screen relative">
        <div>
          <div className="bg-white p-10 rounded-lg flex flex-col h-full gap-5 w-96 max-w-s items-center">
            <h3 className="text-blue-500 text-lg text-center">
              Welcome to EarthQuesTion
            </h3>
            <img src={Planet} alt="Planet" className="h-24 w-24" />
            <div className="flex flex-col gap-6 items-start w-3/4">
              <Button>Begin</Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Card;
