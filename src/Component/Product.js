import React from 'react'

function Product(props) {
  return (
    <div>
        <div className='flex flex-col justify-between items-center bg-white dark:text-black p-10 border rounded-lg                    '>
            <img className='w-1/2 h-30' src={props.picture} alt=''/>
            <h1 className='text-3xl my-7'>{props.title}</h1>
            <a href='/' className='underline'>{props.link}</a>
        </div>
    </div>
  )
}

export default Product