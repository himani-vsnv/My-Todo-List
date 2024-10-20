import React from 'react'

const MyTodo = () => {
  return (
    <>
      {/* <h1 className='bg-red-300 text-center'>Hare Krishna</h1> */}
      <div className='h-screen w-full items-center justify-center'>
        <div className='flex max-w-2xl bg-slate-200 flex-col gap-3 justify-center items-center'>
            <div className='flex text-left'>
                <p className='text-2xl text-blue-800 text-left font-bold'>My Todo List</p>
            </div>
            <div className='flex'>
                <input className='h-8 border-2 border-blue-800' type="text" placeholder='search'/>
            </div>
            <div className='flex'>
                <div className='flex flex-col '>
                    <div className='border-2 flex justify-center '>
                        <input type='text' placeholder='enter your todo' className='h-8 border-2 border-blue-800'/>
                        <button className='text-black font-medium  text-sm px-2  bg-white  border-2 hover:text-blue-800   dark:bg-gray-800 dark:hover:bg-gray-700 '>Peripority</button>
                        <button className='text-white bg-blue-700 px-2  hover:bg-blue-900  font-medium  text-sm  '>Add</button>
                    </div>
                    <div>
                        <input type='text' placeholder='enter your todo' className='h-8 border-2 border-blue-800'/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default MyTodo
