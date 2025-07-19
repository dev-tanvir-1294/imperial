import React from 'react'

function Banner(props) {
  return (
    <div className='flex justify-center items-center '>
        <img className=' w-full  object-cover object-center ' src={props.picture} alt="Banner" />
    </div>
  )
}

export default Banner