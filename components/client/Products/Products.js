import React from 'react'
import Product from './Product'

export default function Products() {
  return (
      <div className='products_section pt-8'>
          <div className='grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 gap-9'>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
        </div>
    </div>
  )
}
