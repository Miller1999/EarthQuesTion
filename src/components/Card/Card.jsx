import { useContext } from "react";

import { QuestionContext } from "../../Context";
import Button from "../Button/Button";
import Planet from "../../assets/planet.svg";

const Card = () => {
  const { capital } = useContext(QuestionContext);
  console.log(capital);
  return (
    <section className="flex flex-col justify-center items-center h-screen relative">
      <div>
        <div className="flex gap-10 items-center absolute top-4">
          <h1 className="text-white text-2xl font-bold mb-5">Country Quiz</h1>
          <img src={Planet} alt="Planet" className="h-24 w-24" />
        </div>

        <div className="bg-white p-10 rounded-lg flex flex-col h-full gap-5 w-80 max-w-xs">
          <h3 className="text-blue-500">{capital} is the capital of</h3>
          <div className="flex flex-col gap-6 items-start">
            <Button correct>1</Button>
            <Button correct={false}>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>Next</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
