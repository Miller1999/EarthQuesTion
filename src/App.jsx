import { Fragment } from "react";
import "./index.css";

function App() {
  return (
    <Fragment>
      <section className="flex flex-col justify-center items-center h-screen ">
        <div>
          <h1 className="">Country Quiz</h1>
          <div className="bg-white p-10 rounded-lg flex flex-col gap-5 max-w-xs">
            <h3 className="text-blue-500">Kuala Lumpur is the capital of</h3>
            <div className="flex flex-col gap-6 items-start">
              <button className="border border-gray-400 w-full text-left p-2 rounded-lg text-gray-500 hover:text-white hover:bg-yellow-400 hover:border-transparent font-medium hover:transition-all duration-500">
                A <span>Vietnam</span>
              </button>
              <button className="border border-gray-400 w-full text-left p-2 rounded-lg text-gray-500 hover:text-white hover:bg-yellow-400 hover:border-transparent font-medium hover:transition-all duration-500">
                B <span>Malasya</span>
              </button>
              <button className="border border-gray-400 w-full text-left p-2 rounded-lg text-gray-500 hover:text-white hover:bg-yellow-400 hover:border-transparent font-medium hover:transition-all duration-500">
                C <span>Sweden</span>
              </button>
              <button className="border border-gray-400 w-full text-left p-2 rounded-lg text-gray-500 hover:text-white hover:bg-yellow-400 hover:border-transparent font-medium hover:transition-all duration-500">
                D <span>Austria</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
