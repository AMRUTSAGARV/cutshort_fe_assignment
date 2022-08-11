import { useState } from "react";
import { StepperContext } from "./components/context/StepperContext";

import MultiStep from "./components/MultiStep";
import MultiStepControl from "./components/MultiStepControl";
import Welcome from "./components/steps/Welcome";
import Setup from "./components/steps/Setup";
import Final from "./components/steps/Final";
import "./input.css";
import Planning from "./components/steps/Planning";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const steps = ["Welcome", "Setup", "Planning", "Complete"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Welcome />;
      case 2:
        return <Setup />;
      case 3:
        return <Planning />;
      case 4:
        return <Final />;
      default:
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    //check if steps are within bounds .
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white px-36">
      <div className="container horizontal mt-5">
        <MultiStep steps={steps} currentStep={currentStep} />
        <div className="my-10 p-10">
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
      {currentStep !== steps.length && (
        <MultiStepControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default App;
