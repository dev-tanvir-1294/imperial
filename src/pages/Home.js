
import React from 'react'

import Banner from '../Component/Banner'
import Footer from '../Component/Footer'

import menBanner from '../assets/images/banner/Mens_Cologne_1.webp'
import womenBanner from '../assets/images/banner/women_perfume_1_1500x.webp'
import classes from './Home.module.css';
import Box from '../Component/Box'
import security from '../assets/images/svg/security-safe-svgrepo-com.svg'
import champion from '../assets/images/svg/champion-football-svgrepo-com.svg'
import like from '../assets/images/svg/like-svgrepo-com.svg'
import StickyHeader from "../Component/StickyHeader"

import Layout from '../Component/Layout'
import BrandsLayout from "../Component/layout/BrandsLayout"
import SwiperBanner from '../Component/SwiperBannerCard'




function Home() {
  return (
    <div>

       

        <StickyHeader/>
        
        <div className={classes.slideBanner}>
           <SwiperBanner />
        </div>
       
        

        

        <div className='flex flex-col lg:flex-row justify-center justify-between w-full items-center gap-10 px-10 py-10'>
          <div className={classes.menBanner}>
              <Banner  picture={menBanner}/>
              
          </div>
          <div className={classes.womenBanner}>
            <Banner  picture={womenBanner}/>
            </div>
          
        </div>

        <div className='flex justify-center items-center flex-wrap gap-4 '>

          <Layout title = "Newly arraived Products"/>
            
        </div>

        <div>
          <BrandsLayout/>
        </div>


        <div className='container mx-auto flex flex-col md:flex-row justify-center items-center gap-4 p-10 '>
          <Box pic={security} title="Trusted Since 1995" description="All products are 100% authentic original brand names. We guarantee your security and will not share your data with anyone." buttonText="Learn More" />

          <Box pic={champion} title="Earn Rewards" description="Every purchase gets you closer to lifetime discounts. Earn one point for every dollar spent, 1000 points equals 10% off." buttonText="Earn Rewards"/>

          <Box pic={like} title="Newly arrived Products" description="Register to buy wholesale at Perfume.com . The best place to buy in bulk or drop ship to your customers." buttonText="Shop Now"/>

        </div>

        

        <div className='container  mx-auto px-4 py-10 text-left'>
          <h1 className='text-xl font-bold text-left py-5'>Buy Perfume Online</h1>
          <p>
            Perfume.com has been America’s #1 place to buy discount perfumes online since 1995. We stock more than 13,000 women’s and men’s fragrances, all of them deliverable to your door within just days. Our broad selection of perfumes and colognes includes celebrity scents, gift sets, best sellers, hard-to-find fragrances, specialty samples, new releases, and even discontinued brands. By buying your next bottle of fragrance online with us, you can save up to 70% off of retail prices, 365 days a year. <br></br>

            Our massive collection of fragrances hugely surpasses what you could find at any individual shop. We also offer reviews of all of the perfumes we stock, making it easy to find what you’re looking for. As a result, first-time shoppers and the most discerning connoisseurs can both find just the right scent at a surprisingly low price. <br></br>

            If you are looking to buy discount perfume online or you want to buy brand-name discount fragrances, Perfume.com is the most trusted online store in America. Finding cheap perfume of top-notch quality is nearly impossible in a typical brick-and-mortar shop. It’s no surprise that many shoppers imagine they have to pay top dollar for quality. However, the efficient online model of Perfume.com makes it possible for us to pass along the savings to you while optimizing convenience. That’s how our satisfied shoppers can afford to indulge in bottles of the very finest “cheap perfume” you’ll find anywhere. <br></br>

            In addition, ordering with Perfume.com is easy and fast. We ship to every country in the world, and most of our fragrances ship from our headquarters within hours of your order. <br></br>

            If you’re looking for a new scent, take a look at our wide selection of discount perfume from the hottest brands, including Dolce & Gabbana, Burberry, Calvin Klein, Lancome, Giorgio Armani, Bvlgari, Calvin Klein, Givenchy, and Gucci. Pick up something for him with a bottle of discount cologne. Plus, our delivery service makes it easy to send cheap perfumes to loved ones for special occasions. If you’re looking to try a new brand, we’ll keep you abreast of the week’s best sellers. Plus, our scent experts offer detailed notes on all of our scents, letting you shop confidently.



          </p>
        </div>

        <Footer/>




    </div>
  )
}

export default Home