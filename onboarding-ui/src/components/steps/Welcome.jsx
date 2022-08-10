import React from 'react';
import { useContext } from 'react';
import { StepperContext } from '../context/StepperContext';

const Welcome = () => {

const {userData, setUserData} = useContext(StepperContext);
const handleChange=(e)=>{
  const {name, value}=e.target;
  setUserData({...userData, [name]: value });

}

  return (
    <div className='flex flex-col'>
      <div className="text-2xl text-center font-bold">Welcome! First things first... </div>
      <div className="text-center p-2 appearance-none w-full outline-none text-gray-500 rounded">You can always change them later.</div>
<div className='w-full mx-2 flex-1'>
<div className=' text-sm font-bold h-6 mt-3 text-gray-500  leading-8 '>
  Full Name
</div>
<div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
<input
onChange={handleChange} 
value={userData["fullname"] || ""}
name="fullname" 
placeholder='Full Name'
className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
/>
</div>
</div>
<div className='w-full mx-2 flex-1'>
<div className='text-sm font-bold h-6 mt-3 text-gray-500  leading-8'>
  Display Name
</div>
<div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
<input
onChange={handleChange} 
value={userData["password"] || ""}
name="displayname" 
placeholder='Display Name' 
className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
/>
</div>
</div>


    </div>
  )
}

export default Welcome