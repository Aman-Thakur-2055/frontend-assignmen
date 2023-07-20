import React from 'react'
import {FaCartPlus} from 'react-icons/fa'
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';




function Details() {

    const params = useParams()
  
    
    
    

    const { isLoading, error, data } = useQuery(['product', params.id], () =>
    axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res) => res.data)
  );
    
      if (isLoading) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message


  return (
   <section>
      <div className='max-w-screen-lg mx-auto md:mx-auto text-black bg-white my-10'>
        <div className='flex flex-col md:flex-row gap-8 justify-between items-center mx-10'>
            <div className='max-w-[200px]'>
                <img src={data.image} alt='details-img' className='w-full'/>
            </div>
            <div className='flex flex-col gap-5 my-5'>
                <div className='flex flex-col gap-5'>
                    <span className='text-base font-bold'>Title: {data.title}</span>
                    <span className='text-base font-bold'>Price: ${data.price}</span>
                    <span className='text-[14px]'>Description: {data.description}</span>
                </div>
                <div className='flex gap-5 md-m-12 justify-between mb-6 items-center '>
                    <button className='flex gap-3 items-center bg-red-600 text-white font-medium px-2 py-1'>
                     <FaCartPlus size={20}/>
                     Add to Cart
                    </button>
                </div>
            </div>
        </div>
      </div>

   </section>
  )
}

export default Details