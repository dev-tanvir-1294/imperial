import React from 'react'
import payment from "../assets/images/Credit-Card.png"
import classes from './footer.module.css'
import logo from "../assets/logo.png"

function Footer() {
  return (
    <div className='bg-[#bfc6fe40] text-black dark:bg-black dark:text-white py-10'>

        
        <div className={classes.footer}>

            <div>
               <img className="rounded-xl" height="120px" width={"120px"}  src={logo} alt=''/>
            </div>

            <div className='first-part text-left w-1/4'>
                <h4 className='text-3xl font-bold mb-4'>About Us</h4>
                <ul>
                    <li>60 feet, Mirpur 2, Dhaka</li>
                    <li>Phone: +8801711111111</li>

                    <li>Email: imperial.scent@gmail.com</li>
                </ul>
                <p>Opeining hours: 9:00am - 5:00pm</p>
                <p>Mirpur Shopping Center, 60 feet, Mirpur 2, Dhaka</p>

            </div>
            
            <div className='second-part text-left w-1/4'>
                <h4 className='text-3xl font-bold mb-4'>Usefull link</h4>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>About</li>
                    <li>Return Policy</li>
                    <li>How to buy</li>
                    <li>Faqs</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li> 
                </ul>
                
            </div>

            <div className='third-part text-left w-1/4'>
                <h4 className='text-3xl font-bold mb-4'>Join us on</h4>
                <ul>
                    
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>YouTube</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                </ul>
                
            </div>

            <div className='fourth-part text-left w-1/4'>
                <h4 className='text-3xl font-bold mb-4'>We accept</h4>
                
                <img src={payment} alt=''/>

            </div>

        </div>



    </div>
  )
}

export default Footer