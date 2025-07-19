

import React from 'react'
import './footer.module.css'

function card(props) {
  return (
    <div>

        <div className='card hover:shadow-2xl flex flex-col items-center justify-center bg-white shadow-lg rounded-lg rounded-xl border border-gray-200'>

            <div className='card-header'>

                <img className='rounded-xl' height={"auto"} width={"350px"} src={props.pic} alt=''/>

            </div>
            <div className='card-body flex flex-col items-center text-center gap-5 pb-7'>
                <h5 className='card-title mt-5 text-green-800 hover:text-yellow-600  text-xl font-bold cursor-pointer'>{props.title}</h5>
                <p className='card-text'>{props.text}</p>
                <button className='bg-[#007bff] py-2 px-6  text-white rounded-full'>Buy Now</button>
            </div>

        </div>

    </div>
  )
}

export default card