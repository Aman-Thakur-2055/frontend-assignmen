import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const fetchData = async () => {

  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Error fetching data')
  }
  return response.json();
}


function Search({ setShowSearch }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const onchange = (e)=>{
    setQuery(e.target.value);
  }

  const { data, isLoading, error } = useQuery(['products'], fetchData);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>404 error data not found</div>;
  }

  let products = []
  if (data) {
    products = [...data]
  }

  return (
    <section className='w-full h-screen fixed top-0 bg-white '>
      <div className='flex items-center justify-center  px-4 md:px-8 py-6 max-w-screen-lg mx-auto'>
        <div className='w-full'>
          <input type='text' placeholder='search...' autoFocus className='w-full outline-none border-none text-2xl' onChange={onchange} value={query}/>
        </div>
        <MdClose size={34} onClick={() => setShowSearch(false)} />
      </div>
      <div className='w-full mx-auto p-0 md:w-[800px]'>
        {products?.length ? (

          <div className=' overflow-hidden h-screen pb-5 md:pb-32 my-5'>
            {products?.filter((pro)=>{
              if(!query?.length){
                return null;
            }else if (pro?.title.toLowerCase().includes(query.toLowerCase())){
              return pro;
            }return false;

            })
            .map((pro)=>(
              <div className=' cursor-pointer flex gap-2 items-center px-3 border border-b-2 border-solid border-gray-500'
               key={pro?.id} onClick={()=>{navigate('/product/' + pro?.id) 
               setShowSearch(false)}}>
              <div className='bg-black w-[60px] h-[60px] flex-shrink-0'>
                <img src={pro?.image} alt='' className='w-full h-full' />
              </div>
              <div className='overflow-hidden'>
                <span className='text-ellipsis overflow-hidden text-base block mb-3 font-bold'>{pro?.title}</span>
                <span className='text-ellipsis overflow-hidden text-base block mb-3 font-medium'>{pro?.description}</span>
        
              </div>
            </div>

            ))
            }
   
          </div>


        ) : null}

      </div>


    </section>
  )
}

export default Search