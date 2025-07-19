import React from 'react'
import Header from '../Component/Header'
import Footer from './../Component/Footer';
import Banner from '../Component/Banner';
import bannerImage from '../assets/images/product-image/e589a5153901473.6338205d135bd.png';

// Below is the code of c:\Users\ahmed\Desktop\react\Product\imperial\src\pages\About.js 


function About() {
  return (
    <div>
      <Header/>
      {/* <h1 className='text-center'>About Us</h1> */}

      <Banner picture={bannerImage}/>

      <Footer/>
    </div>
  )
}

export default About