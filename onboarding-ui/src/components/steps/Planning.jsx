import React from 'react'

const Planning = () => {
  return (
    <div className='flex flex-col'>
    <div className="text-2xl text-center font-bold">How are you planning to use Eden?  </div>
    <div className="text-center p-2 appearance-none w-full outline-none text-gray-500 rounded">We'll streamline your setup experince accordingly.</div>
    <div className='flex w-96 px-8 py-4 '>
      <div className='px-3 py-3 h-44 w-40  bg-none border border-indigo-600 rounded-md   '>
        <h4 className='font-bold text-sm'>For Myself</h4>
        <h6 className='text-xs text-gray-600'> Write better. Think more clearly. Stay organized.</h6>
        </div>
    <div className=' px-3 py-3 h-44 w-40  bg-none border border-indigo-600  rounded-md'>
    <h4 className='font-bold text-sm'>With my team</h4> 
    <h6 className='text-xs text-gray-600'> Wikis, docs, tasks and projects, all in one place.</h6>     </div>
    </div>
    </div>
  
  )
}

export default Planning