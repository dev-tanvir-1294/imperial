import React from 'react'
import Product from '../Product'
import product from '../../assets/images/product-image/New folder/74036m.webp'
import dolce from '../../assets/images/product-image/New folder/dolce-gabbana.webp'
import calvin from '../../assets/images/product-image/New folder/calvin-klein.webp'
import versce from '../../assets/images/product-image/New folder/versace.webp'

function BrandsLayout() {
  return (
    <div className='  py-10'>
        
        <div className='container mx-auto'>
            <h1 className='text-4xl font-bold my-4'>Top Fragrance Brands</h1>
            <a  href='/' className='underline'>View All Brands</a>

            <div className='grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-10 p-20'>
                <Product picture={product} title="Armaf" link='36 Product'/>
                <Product picture={dolce} title="Dolce & Gabbana" link='38 Product'/>
                <Product picture={calvin} title="Calvin Klein" link='42 Product'/>
                <Product picture={versce} title="Versace" link='26 Product'/>
            </div>
        </div>
        
    </div>
  )
}

export default BrandsLayout