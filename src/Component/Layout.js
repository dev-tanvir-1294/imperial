

import React from 'react'
import Card from '../Component/card'

import perfume from '../assets/images/product-image/pexels-didsss-1190829.jpg'
import perfume2 from '../assets/images/product-image/pexels-valeriya-965989.jpg'
import perfume3 from "../assets/images/product-image/pexels-valeriya-1961792.jpg"

function Layout(props) {
  return (
    <div className='pb-16'>

        <h2 className='text-left text-4xl font-bold my-10 cursor-pointer text-black'>{props.title}</h2>

        <div className='flex flex-col md:flex-row justify-center items-center flex-wrap gap-10 p-4'>
            
            <Card pic={perfume} title='Didsss' text='$344.99'/>

            
            <Card pic={perfume2} title='valeria' text='$299.99'/>

            
            <Card pic={perfume3} title='Chanel' text='$399.99'/>


        </div>


    </div>
  )
}

export default Layout