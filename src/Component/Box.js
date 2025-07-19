import React from 'react'

function Box(props) {
  return (
    <div className='flex flex-col items-center justify-center bg-[#bfc6fe40] dark:bg-white p-4 border rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300'>
        <img className='h-20 w-20' src={props.pic} alt="" />
        <h2 className='text-gray-800 text-center py-5 text-lg font-bold'>{props.title}</h2>
        <p className='text-black text-center'>{props.description}</p>
        <button className='bg-gray-800 hover:bg-gray-700 text-white mt-5 font-bold py-2 px-4 rounded-full'>{props.buttonText}</button>
    </div>
  )
}

export default Box;