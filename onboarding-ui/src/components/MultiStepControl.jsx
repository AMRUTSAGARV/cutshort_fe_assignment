import React from 'react';


const StepperControl = ({handleClick,currentStep,steps}) => {
  return (
    <div className="container flex justify-around mt-4 mb-8">

     
      <button 
      onClick={()=>handleClick("next")}
      className="bg-indigo-500 text-white w-96 py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out">
{currentStep === steps.length - 1 ? "Create Workspace" : "Create Workspace" }
      </button>
    </div>
  )
}

export default StepperControl