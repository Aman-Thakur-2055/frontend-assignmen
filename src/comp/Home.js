import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BsArrowBarRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


export const fetchData = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Error fetching data')
  }
  return response.json();
}
function Home() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery(['products'], fetchData);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>404 error data not found</div>;
  }



  return (
    <>
      <section className=' text-white'>

        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-40  gap-4 px-4' >
          {data?.map((item) => (
            <div className="w-full flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={item.id} >

              <img className="rounded-t-lg w-1/2 p-4 object-fill" src={item?.image} alt='product' />

              <div className="p-5 w-1/2 flex flex-col justify-center">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">{item?.title}</h5>

                <span className='text-black text-lg font-semibold my-2'>$ {item?.price}</span>
                <span className="inline-flex gap-1 w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  cursor-pointer" onClick={() => { navigate(`/product/${item?.id}`) }}>
                  Browse <BsArrowBarRight size={21} />

                </span>
              </div>
            </div>
          ))}

        </div>




      </section>




    </>
  )
}

export default Home