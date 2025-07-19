

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';    
import Banner  from './Banner';
import BannerImage from '../assets/images/banner/marly_o.webp';
import BannerImage2 from '../assets/images/banner/Summer_Deals_Upto_50_Discount_-The-perfume-shop.webp';
import BannerImage3 from '../assets/images/product-image/Rasasi-Hawas-and-Hawas-Ice-Banner-Web.jpg';
import BannerImage4 from '../assets/images/banner/homeimage_desktop.webp';




import 'swiper/css';
    import 'swiper/css/autoplay';

function SwiperBannerCard() {
    return (

       <>
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}

       autoplay={{
            delay: 3000, // 3 seconds de
            disableOnInteraction: false, // Autoplay continues after user interaction
            pauseOnMouseEnter: true, // Autoplay pauses on mouse hover
          }}
          loop={true}
      spaceBetween={5}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Banner picture={BannerImage}/></SwiperSlide>
      <SwiperSlide><Banner picture={BannerImage2}/></SwiperSlide>
      <SwiperSlide><Banner picture={BannerImage3}/></SwiperSlide>
      <SwiperSlide><Banner picture={BannerImage4}/></SwiperSlide>
      
    </Swiper> 
       
       </>
     
    )
  }
  
  export default SwiperBannerCard;