import React, { useState } from "react";

const PageOne = () => {
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto"></div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-slate-200">
        <form action="" className="space-y-6">
          <div className="text-2xl text-center font-bold">
            Welcome! First things first...
          </div>
          <div className="text-center">You can always change them later.</div>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Display Name
            </label>
            <input
              type="text"
              placeholder="Enter your Display Name"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <button className=" text-xs p-2 bg-indigo-600 w-full text-white">
            Create Workspace
          </button>
        </form>
      </div>
    </div>
  );
};

export default PageOne;
