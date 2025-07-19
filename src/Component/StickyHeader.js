


import logo from "../assets/logo.png"
import Header from './Header'

import React from 'react'





function StickyHeader() {

    


  return (
        <>
            
    <div className='bg-white dark:bg-black flex flex-col md:flex-row justify-between items-center px-28 py-2 sticky top-0 z-[99]'>

        <img className="rounded-xl" height="100px" width={"100px"}  src={logo} alt=''/>

        <div className='w-1/2  bg-white rounded-full text-left '>
            <input className='w-full border rounded-full text-black py-2 px-10' type='text' placeholder='Search 1000+ Trusted Product' />
            
        </div>

        <p>Cart</p>

        

        

        


    </div>

       <Header/>
        </>
 
  )
}

export default StickyHeader