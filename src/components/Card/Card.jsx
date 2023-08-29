import { Fragment, useContext } from "react";

import { QuestionContext } from "../../Context";
import Button from "../Button/Button";
import Planet from "../../assets/planet.svg";

const Card = () => {
  const { capital, answers, selected, isCorrect } = useContext(QuestionContext);

  if (capital !== "") {
    return (
      <section className="flex flex-col justify-center items-center h-screen relative">
        <div>
          <div className="flex gap-24 items-center absolute top-4">
            <h1 className="text-white text-2xl font-bold mb-5">Country Quiz</h1>
            <img src={Planet} alt="Planet" className="h-24 w-24" />
          </div>

          <div className="bg-white p-10 rounded-lg flex flex-col h-full gap-5 w-96 max-w-s">
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
  } else {
    return (
      <section className="flex flex-col justify-center items-center h-screen relative">
        <div>
          <div className="flex gap-24 items-center absolute top-4">
            <h1 className="text-white text-2xl font-bold mb-5">Country Quiz</h1>
          </div>

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
